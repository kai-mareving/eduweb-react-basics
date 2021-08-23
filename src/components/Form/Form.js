import React from 'react';
import AppContext from '../../context';
import styles from './Form.module.scss';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Radio from './FormRadio';
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
    title: '',
    link: '',
    image: '',
    description: '',
  }

  handleFormType = (type) => {
    this.setState({
      activeOption: type,
    });
  };

  handleInputChange = e => {
    // console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });

    console.log(`
      title: ${this.state.title},
      link: ${this.state.link},
      image: ${this.state.image},
      description: ${this.state.description},
    `);
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
                  changeFn={() => this.handleFormType(types.twitter)}>
                  Twitter
                </Radio>
                <Radio
                  id={types.article}
                  checked={activeOption === types.article}
                  changeFn={() => this.handleFormType(types.article)}>
                  Article
                </Radio>
                <Radio
                  id={types.note}
                  checked={activeOption === types.note}
                  changeFn={() => this.handleFormType(types.note)}>
                  Note
                </Radio>
              </div>

              <Input onChange={this.handleInputChange}
              value={this.state.title} name='title'
                label={activeOption === types.twitter ? 'Twitter Name' : 'Title'}
                maxLength={30}
              />
              {activeOption !== types.note ?
                (<Input onChange={this.handleInputChange}
                  value={this.state.link} name='link'
                  label={activeOption === types.twitter ? 'Twitter Link' : 'Link'}
                />)
                : null}
              {activeOption === types.twitter ?
                (<Input onChange={this.handleInputChange}
                  value={this.state.image} name='image' label='Image'
                />)
                : null}
              <Input onChange={this.handleInputChange}
                value={this.state.description}
                tag='textarea' name='description' label='Description'
              />
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
