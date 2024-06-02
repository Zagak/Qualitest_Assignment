import { FC, useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { debouncedFetchUsers } from "../../store/slices/user/userSlice";
import { StyledContainer, StyledInput, StyledNumberInput } from "./styles";

export const Input: FC = () => {
  const [searchText, setSearchText] = useState("");
  const [numEntries, setNumEntries] = useState<number>(3);
  const numEntriesRef = useRef(numEntries);
  const dispatch = useDispatch<AppDispatch>();
  const maximumUsersToFetch = 20;
  const minimumUsersToFetch = 1;

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    debouncedFetchUsers(dispatch, event.target.value, numEntriesRef.current);
  };

  const handleNumEntriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNumEntries(value === "" ? NaN : Number(value));
  };

  const handleNumEntriesBlur = () => {
    let newNumEntries = numEntries;
    if (isNaN(newNumEntries) || newNumEntries <= 0) {
      newNumEntries = 1;
    } else if (newNumEntries > maximumUsersToFetch) {
      newNumEntries = maximumUsersToFetch;
    } else if (newNumEntries < minimumUsersToFetch) {
      newNumEntries = minimumUsersToFetch;
    }
    setNumEntries(newNumEntries);
    numEntriesRef.current = newNumEntries;
  };

  useEffect(() => {
    if (searchText) {
      debouncedFetchUsers(dispatch, searchText, numEntriesRef.current);
    }
  }, [dispatch, searchText]);

  return (
    <StyledContainer>
      <StyledNumberInput
        type="number"
        value={isNaN(numEntries) ? "" : numEntries}
        max={maximumUsersToFetch}
        min={minimumUsersToFetch}
        onChange={handleNumEntriesChange}
        onBlur={handleNumEntriesBlur}
        placeholder="Număr de elemente"
      />
      <StyledInput
        type="text"
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder="Search ..."
      />
    </StyledContainer>
  );
};
