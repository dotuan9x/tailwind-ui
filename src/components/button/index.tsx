import React from 'react';

import Preview from 'Modules/components/preview';
import PrimaryButton from 'Components/button/primary';

const Button = () => {
    return (
        <>
            <section className="mt-10">
                <Preview>
                    <PrimaryButton />
                </Preview>
            </section>
        </>
    );
};

export default Button;
