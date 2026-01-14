export = LayoutsTypes;
export as namespace LayoutsTypes;

namespace LayoutsTypes {
    interface IBaseLayoutProps {
        children: React.ReactNode;
    };

    interface IRootLayoutProps extends IBaseLayoutProps {
        params: Promise<{ locale: string }>;
    };
}