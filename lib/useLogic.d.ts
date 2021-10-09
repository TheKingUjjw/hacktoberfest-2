declare const useLogic: () => {
    isTrue: (data: any) => boolean;
    isFalse: (data: any) => boolean;
    isNull: (data: any) => boolean;
    isUndefined: (data: any) => boolean;
    isZero: (data: number | string) => boolean | undefined;
    isEven: (data: number) => boolean;
    isOdd: (data: number) => boolean;
};
export default useLogic;
