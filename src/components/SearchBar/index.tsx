import { useEffect, useState, ChangeEventHandler } from 'react';

import { StyledTextField } from './styles.ts';

import { SearchBarProps } from './types.ts';

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(inputValue);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, onSearch]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    setInputValue(e.target.value);
  };

  return (
    <StyledTextField
      label="Пошук"
      placeholder="Ім’я користувача…"
      variant="outlined"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
