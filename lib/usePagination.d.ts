declare type Props = {
    limit: number;
    total: number;
    defaultPage?: number;
};
export declare const usePagination: (props: Props) => {
    page: number;
    pages: number;
    nextPage: () => void;
    backPage: () => void;
    haveNextPage: boolean;
    haveBackPage: boolean;
};
export {};
