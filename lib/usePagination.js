"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePagination = void 0;
const react_1 = require("react");
const usePagination = (props) => {
    const { limit, total, defaultPage } = props;
    const [page, setPage] = (0, react_1.useState)(defaultPage !== null && defaultPage !== void 0 ? defaultPage : 1);
    const pages = Math.floor(total / limit);
    const nextPage = (0, react_1.useCallback)(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page]);
    const backPage = (0, react_1.useCallback)(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);
    const { haveNextPage, haveBackPage } = (0, react_1.useMemo)(() => {
        let haveNextPage = false, haveBackPage = false;
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
exports.usePagination = usePagination;
