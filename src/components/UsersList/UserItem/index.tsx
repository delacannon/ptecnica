import { UserContainer, UserAvatar, UserName, UserEmail } from "./style";

type UserItemProps = {
  avatar?: string;
  firstName: string;
  lastName: string;
  email: string;
};

export const UserItem = ({
  firstName,
  lastName,
  avatar,
  email,
}: UserItemProps) => {
  return (
    <UserContainer>
      <UserAvatar src={avatar} />
      <UserName>
        {firstName} {lastName}
        <br />
        <UserEmail>{email}</UserEmail>
      </UserName>
    </UserContainer>
  );
};
