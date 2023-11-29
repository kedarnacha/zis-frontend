import React from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

interface MainFormProps {
    data: any; // Adjust the type according to your data structure
    form: any; // Adjust the type according to your form state
}

class MainForm extends React.Component<MainFormProps> {
    renderForm() {
        const { data, form } = this.props;

        if (data?.data.program_category_id === 1) {
            return <Form1 form={form} />;
        } else if (data?.data.program_category_id === 3) {
            return <Form3 form={form} />;
        } else if (data?.data.program_category_id === 2 || data?.data.program_category_id === 4) {
            return <Form2 form={form} />;
        } else {
            return <p>Unsupported program category</p>;
        }
    }

    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        );
    }
}

export default MainForm;