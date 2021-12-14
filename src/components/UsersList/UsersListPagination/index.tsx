import { useAppDispatch } from "hooks/redux-hooks";
import { changePageAction } from "store/action-creators";
import { PageNumberButton, btnStyle } from "./styles";

export type PageNumberButtonProps = {
  btnColor: {
    backgroundColor: string;
    textColor: string;
    pointerEvents: string;
  };
};

export const UsersListPagination = ({ page, currentPage }) => {
  const dispatch = useAppDispatch();
  const selectedPage = page === currentPage;
  return (
    <PageNumberButton
      onClick={() => dispatch(changePageAction(page))}
      btnColor={selectedPage ? btnStyle[0] : btnStyle[1]}
    >
      {page}
    </PageNumberButton>
  );
};
