import React, {ComponentType} from 'react';
import {Preloader} from "../components/common/Preloader";

const withSuspense = (Component: ComponentType) => (props: any) => {
    return (
        <React.Suspense fallback={<Preloader/>}>
            <Component {...props} />
        </React.Suspense>
    );
};

export default withSuspense;