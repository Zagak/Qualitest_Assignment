import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import debounce from "lodash.debounce";

type User = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
  };
};

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

const fetchDebouncedUsers = createAsyncThunk(
  "users/fetchDebouncedUsers",
  async ({ text, entries }: { text: string; entries: number }) => {
    const response = await fetch(
      `https://randomuser.me/api/?results=${entries}&name=${text}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.results.map((user: User) => ({
      picture: { medium: user.picture.large, large: user.picture.medium },
      name: { first: user.name.first, last: user.name.last },
    }));
  }
);

export const debouncedFetchUsers = debounce((dispatch, text, entries) => {
  if (text !== "") dispatch(fetchDebouncedUsers({ text, entries }));
}, 3000);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDebouncedUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDebouncedUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchDebouncedUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
