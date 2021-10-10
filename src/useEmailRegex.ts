export const useEmailRegex = (regex?: RegExp) => {
  const regexEmail =
    regex ??
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  const isEmail = (email: string) => {
    const emailBool = email.match(regexEmail)
    return emailBool ? true : false
  }
  return {
    isEmail,
  }
}
