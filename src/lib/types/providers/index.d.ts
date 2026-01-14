import type { ReactNode } from "react";
export = ProvidersTypes;
export as namespace ProvidersTypes;

namespace ProvidersTypes {
    interface IBaseLayoutProps {
        children: ReactNode;
    }

    interface IRootProviderProps extends IBaseLayoutProps {
        // TODO: write types root provider
    }
}
