import React from 'react';
import AppContext from '../../context';
import styles from './Form.module.scss';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Radio from "./FormRadio";
import Title from '../Title/Title';

const types = {
  twitter: 'twitter',
  article: 'article',
  note: 'note',
};

const descriptions = {
  twitter: 'Twitter account',
  article: 'Article',
  note: 'Note',
};

class Form extends React.Component {
  state = {
    activeOption: types.twitter,
  }

  handleFormType = (type) => {
    this.setState({
      activeOption: type,
    });
  };

  render() {
    const { activeOption } = this.state;

    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
          <Title>Add new {descriptions[this.state.activeOption]}</Title>
          <form autoComplete='off' className={styles.form} onSubmit={context.addItem}>
            {/* ad. autocomplete -> browsers (except chrome) require hidden input with autocomplete off */}

            <div className={styles.formOptions}>
              <Radio
                id={types.twitter}
                checked={this.state.activeOption === types.twitter}
                changeFn={() => this.handleFormType(types.twitter)}
              >
                Twitter
            </Radio>
              <Radio
                id={types.article}
                checked={activeOption === types.article}
                changeFn={() => this.handleFormType(types.article)}
              >
                Article
            </Radio>
              <Radio
                id={types.note}
                checked={activeOption === types.note}
                changeFn={() => this.handleFormType(types.note)}
              >
                Note
            </Radio>
            </div>

            <Input name='name'
              label={activeOption === types.twitter ? 'Twitter Name' : 'Title'}
              maxLength={30}
            />
            {activeOption !== types.note ?
              (<Input name='link'
                label={activeOption === types.twitter ? 'Twitter Link' : 'Link'}
              />)
              : null}
            {activeOption === types.twitter ?
              (<Input name='image' label='Image' />)
              : null}
            <Input tag='textarea' name='description' label='Description' />
            <Button>add new item</Button>

          </form>
        </div>
        )}
      </AppContext.Consumer>
    );
  }
}

Form.propTypes = {
  submitFn: PropTypes.func,
};

export default Form;
