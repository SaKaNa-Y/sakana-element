interface MessageNotice {
    content: string;
    close: () => void;
}
declare const _default: import('vue').DefineComponent<MessageNotice, {
    setVisible: (value: boolean) => void;
    setTopHeight: (value: number) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<MessageNotice> & Readonly<{}>, {
    content: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
