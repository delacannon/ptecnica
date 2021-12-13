import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { fetchListAction } from "store/action-creators";
import { UserItem } from "./UserItem";
import { PaginationItem } from "./PaginationItem";
import { UsersItemsContainer, PaginationContainer } from "./styles";

export const UsersList = () => {
  const { users, currentPage } = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();

  const listUsers = () => dispatch(fetchListAction(currentPage));

  useEffect(() => {
    listUsers();
  }, []);

  return (
    <>
      <UsersItemsContainer>
        {users.data.map(({ first_name, last_name, avatar, email, id }) => (
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
        {Array.from(Array(users.total_pages).keys()).map((pageNum) => (
          <PaginationItem
            key={pageNum}
            page={pageNum + 1}
            currentPage={currentPage}
          />
        ))}
      </PaginationContainer>
    </>
  );
};
