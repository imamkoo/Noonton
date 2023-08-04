import PropTypes from 'prop-types';
import { forwardRef, useEffect, useRef } from 'react';
import '../../css/input.css';

// Properti default dan tipe data untuk setiap prop
TextInput.propTypes = {
  type: PropTypes.oneOf(["text","email","password","number","file"]),
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  isFocused: PropTypes.bool,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.oneOf(["primary","error","primary-outline"]),
  isError: PropTypes.bool,
};

// Komponen TextInput
function TextInput({
  type = 'text',
  className = '',
  isFocused = false,
  variant = 'primary',
  isError = false,
  ...props
}, ref) {
  // Buat ref menggunakan useRef() jika tidak ada ref yang diberikan
  const inputRef = ref ? ref : useRef();

  // Efek untuk fokus input jika isFocused true
  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  // Gabungkan kelas-kelas yang diperlukan untuk input
  const inputClassName = `rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && "input-error"} input-${variant} ${className}`;


  // Render komponen input
  return (
    <input
      {...props}
      type={type}
      className={inputClassName}
      ref={inputRef}
    />
  );
}

// Export komponen TextInput yang menggunakan forwardRef
export default forwardRef(TextInput);
