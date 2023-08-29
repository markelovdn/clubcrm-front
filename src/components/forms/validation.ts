export function useIsValidPhone (store: Object) {
  let error = false;
  const message = 'Данный номер телефона не зарегистрован в системе';

  if(store.user.error && store.user.error.type === 'phone') {
    error = true;
    return { error, message }
  }
  return { error }
}

export function useIsValidPassword (store: Object) {
  let error = false;
  const message = 'Не верный пароль';

  if(store.user.error && store.user.error.type === 'password') {
    error = true;
    return { error, message }
  }
  return { error }
}