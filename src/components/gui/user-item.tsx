import styled from "styled-components";

type UserItemProps = {
  avatar?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
};

export const UserItem = ({
  firstName,
  lastName,
  avatar,
  email,
}: UserItemProps) => {
  return (
    <div>
      <UserContainer>
        <UserAvatar src={avatar} />
        <UserName>
          {firstName} {lastName}
          <br />
          <UserEmail>{email}</UserEmail>
        </UserName>
      </UserContainer>
    </div>
  );
};

const UserContainer = styled.div`
  border: 2px solid black;
  width: 464px;
  min-height: 68px;
  padding: 10px;
  margin: 10px;
  display: flex;
  background: white;
  box-shadow: 8px 16px tomato;
  font-family: "Helvetica", arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
  &:hover {
    background: #f0f0f0;
  }
`;

const UserAvatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: black;
  margin-bottom: 0.2em;
  margin-right: 0.3em;
`;

const UserEmail = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  color: tomato;
  margin-top: 0.8rem;
  margin-right: 0.3em;
`;
