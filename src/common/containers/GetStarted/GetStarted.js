import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Header from '../../components/Header/Header';
import Card from '../../components/Card';
import Button from '../../../widget/Button/Button';
import Form from '../../../widget/Form/Form';
import FormRadio from '../../../widget/Form/FormRadio';
import FormGroup from '../../../widget/Form/FormGroup';
import FormLabel from '../../../widget/Form/FormLabel';
import FormControl from '../../../widget/Form/FormControl';
import Dropdown from '../../../widget/Dropdown/Dropdown';
import TermsAndConditions from '../../components/TermsAndConditions';
import styles from './get-started.module.scss';
import commonStyles from '../../scss/common.module.scss';

const GetStarted = () => {
  const validationSchema = yup.object({
    child_name: yup.string()
      .matches(/^([^\s][A-Za-z\s']{2,})$/)
      .required(),
    grade_id: yup.string()
      .required(),
    board_id: yup.string()
      .required(),
  });
  const gradeList = [
    {
      key: 'grade_5',
      label: 'Class 5',
    },
    {
      key: 'grade_6',
      label: 'Class 6',
    },
    {
      key: 'grade_7',
      label: 'Class 7',
    },
    {
      key: 'grade_8',
      label: 'Class 8',
    },
    {
      key: 'grade_9',
      label: 'Class 9',
    },
  ];
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <div className={styles['get-started-root']}>
      <Header
        className={styles['header-wrapper']}
      />
      <Card className={styles['inner-wrapper']}>
        <div className={styles.heading}>Book your free live class</div>
        <Formik
          initialValues={{
            child_name: '',
            grade_id: '',
            board_id: '',
          }}
          isInitialValid={false}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {props => {
            const {
              values,
              isValid,
              handleChange,
              // handleBlur,
              handleSubmit,
              setFieldValue
            } = props;
            return (
              <Form
                className={styles['form-holder']}
                onSubmit={handleSubmit}
              >
                <FormGroup>
                  <FormControl
                    id="child_name"
                    type="text"
                    value={values.child_name}
                    onChange={handleChange}
                    placeholder="Your child's name"
                  />
                </FormGroup>
                {/* <FormGroup>
                  <FormControl
                    id="grade_id"
                    as="select"
                    value={values.grade_id}
                    onChange={handleChange}
                    placeholder="Their current class"
                  >
                    <option value="Class 5" label="Class 5" />
                    <option value="Class 6" label="Class 6" />
                    <option value="Class 7" label="Class 7" />
                    <option value="Class 8" label="Class 8" />
                    <option value="Class 9" label="Class 9" />
                  </FormControl>
                  {touched.grade_id && errors.grade_id
                    ? <FormFeedback type="invalid">Invalid Field</FormFeedback>
                    : null}
                </FormGroup> */}
                <FormGroup>
                  <Dropdown
                    value={values.grade_id}
                    optionsList={gradeList}
                    placeHolder="Their current class"
                    onChange={(e, val) => {
                      setFieldValue('grade_id', e.key);
                      console.log(`index selected: ${val}`);
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel className={styles['label-style']}>Their school board</FormLabel>
                  <div className={`${commonStyles['display-flex']} ${commonStyles['flex-wrap']}`}>
                    <FormRadio
                      className={styles['input-row']}
                      name="board_id"
                      label="CBSE"
                      value="CBSE"
                      checked={values.board_id === 'CBSE'}
                      onChange={() => setFieldValue('board_id', 'CBSE')}
                    />
                    <FormRadio
                      className={styles['input-row']}
                      name="board_id"
                      label="ICSE"
                      value="ICSE"
                      checked={values.board_id === 'ICSE'}
                      onChange={() => setFieldValue('board_id', 'ICSE')}
                    />
                  </div>
                </FormGroup>
                <Button
                  type="submit"
                  variant="primary"
                  className={commonStyles['font-bold']}
                  disabled={!isValid}
                >
                  Show Live Class Options
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Card>
      <TermsAndConditions />
    </div>
  );
};

export default GetStarted;
