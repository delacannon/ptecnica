import { useAppDispatch } from "hooks/redux-hooks";
import { fetchListAction } from "store/action-creators";
import { PaginationItemBtn, btnStyle } from "./styles";

export type IPaginationItemBtn = {
  btnColor: {
    backgroundColor: string;
    textColor: string;
    pointerEvents: string;
  };
};

export const PaginationItem = ({ page, currentPage }) => {
  const dispatch = useAppDispatch();
  const selectedPage = page === currentPage;
  return (
    <PaginationItemBtn
      onClick={() => dispatch(fetchListAction(page))}
      btnColor={selectedPage ? btnStyle[0] : btnStyle[1]}
    >
      {page}
    </PaginationItemBtn>
  );
};
