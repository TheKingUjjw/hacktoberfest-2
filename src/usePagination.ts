import { useCallback, useMemo, useState } from "react";

type Props = {
  limit: number;
  total: number;
  defaultPage?: number;
};
export const usePagination = (props: Props) => {
  const { limit, total, defaultPage } = props;
  const [page, setPage] = useState<number>(defaultPage ?? 1);
  const pages = Math.floor(total / limit);

  const nextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page]);

  const backPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const { haveNextPage, haveBackPage } = useMemo(() => {
    let haveNextPage = false,
      haveBackPage = false;
    if (page > 1) {
      haveBackPage = true;
    }

    if (page < pages) {
      haveNextPage = true;
    }
    return { haveNextPage, haveBackPage };
  }, [page]);

  return {
    page,
    pages,
    nextPage,
    backPage,
    haveNextPage,
    haveBackPage
  };
};
