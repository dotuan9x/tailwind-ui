import React from 'react';

import Preview from 'Modules/components/preview';
import PrimaryButton from 'Components/button/primary';
// import SecondaryButton from 'Components/button/secondary';
// import DefaultButton from 'Components/button/default';

const Button = () => {
    return (
        <>
            <section className="mt-10">
                <Preview title="Primary button">
                    <PrimaryButton />
                </Preview>
            </section>
            {/* <section className="mt-10">
                <Preview>
                    <SecondaryButton />
                </Preview>
            </section>
            <section className="mt-10">
                <Preview>
                    <DefaultButton />
                </Preview>
            </section> */}
        </>
    );
};

export default Button;
