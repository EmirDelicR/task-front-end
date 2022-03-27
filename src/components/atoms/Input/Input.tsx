import React, { FormEvent } from 'react';

import './Input.scss';

interface Props {
  label: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
}

export default function Input({ label, onChange }: Props) {
  return (
    <div className="input" data-testid="input">
      <input className="input__field" type="text" required onChange={onChange} />
      <span className="input__text">{label}</span>
    </div>
  );
}
