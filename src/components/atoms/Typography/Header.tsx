import HeaderStyle from "./_header.module.scss";

type HeaderProps = {
    title: string,
    [rest: string]: any;
}

export const PrimaryHeader: React.FC<HeaderProps> = (props, _ref) => {
    const { className, onClick, title, ...rest } = props;
    return (

        <h2 className={` ${HeaderStyle.primary} ${className && className}`} {...rest}>
            {title}
        </h2>
    );
};

