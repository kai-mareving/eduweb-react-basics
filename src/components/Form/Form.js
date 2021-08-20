import React from 'react';
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
    return (
      <div className={styles.wrapper}>
        <Title>Add new { descriptions[this.state.activeOption] }</Title>
        <form autoComplete='off' className={styles.form} onSubmit={ this.props.submitFn }>
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
              checked={this.state.activeOption === types.article}
              changeFn={() => this.handleFormType(types.article)}
            >
              Article
            </Radio>
            <Radio
              id={types.note}
              checked={this.state.activeOption === types.note}
              changeFn={() => this.handleFormType(types.note)}
            >
              Note
            </Radio>
          </div>

          <Input name='name' label='Name' maxLength={30} />
          <Input name='link' label='Link' />
          <Input name='image' label='Image' />
          <Input tag='textarea' name='description' label='Description' />
          <Button>add new item</Button>

        </form>
      </div>
    );
  }
}

Form.propTypes = {
  submitFn: PropTypes.func,
};

export default Form;
