import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { fetchListAction } from "store/action-creators";
import { UserItem } from "./UserItem";
import { UsersListPagination } from "./UsersListPagination";
import {
  UsersItemsContainer,
  PaginationContainer,
  UserListContainer,
} from "./styles";

export const UsersList = () => {
  const { users, currentPage } = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchListAction(currentPage || 1));
  }, [dispatch, currentPage]);

  return (
    <UserListContainer>
      <UsersItemsContainer>
        {users &&
          users.data.map(({ first_name, last_name, avatar, email, id }) => (
            <UserItem
              key={id}
              firstName={first_name}
              lastName={last_name}
              avatar={avatar}
              email={email}
            />
          ))}
      </UsersItemsContainer>
      <PaginationContainer>
        {Array.from(Array(users && users.total_pages).keys()).map((pageNum) => (
          <UsersListPagination
            key={pageNum}
            page={pageNum + 1}
            currentPage={currentPage}
          />
        ))}
      </PaginationContainer>
    </UserListContainer>
  );
};
