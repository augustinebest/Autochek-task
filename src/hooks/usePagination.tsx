interface IUsePagination {
  total: number;
  pageSize: number;
  currentPage: number;
}

export const usePagination = ({
  total,
  pageSize,
  currentPage,
}: IUsePagination) => {};
