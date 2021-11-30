import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { fetchUsers } from "store/actions";
import { UserItem } from "components/gui/user-item";

type PaginationNumberProps = {
  currentPage: number;
};

export const Users = () => {
  const { users, currentPage } = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
  }, []);

  return (
    <UsersContainer>
      <UsersHeader>Listado</UsersHeader>
      <UsersItemsContainer>
        {Object.keys(users).length > 0 &&
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
      <Pagination>
        {Array.from(Array(users.total_pages).keys()).map((e) => (
          <PaginationNumber
            key={e}
            onClick={() => dispatch(fetchUsers(e + 1))}
            currentPage={currentPage}
          >
            {e + 1}
          </PaginationNumber>
        ))}
      </Pagination>
    </UsersContainer>
  );
};

const UsersContainer = styled.div`
  width: 500px;
  margin: 1rem auto;
`;

const UsersHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;
const UsersItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;
const Pagination = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
`;
const PaginationNumber = styled.li<PaginationNumberProps>`
  padding: 0.4rem;
  &:hover {
    color: tomato;
    cursor: pointer;
  }
  color: black;
  text-transform: bold;
  color: black;
  font-size: 1.4rem;
`;
