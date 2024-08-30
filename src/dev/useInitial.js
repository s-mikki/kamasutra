import {useState} from 'react'

export const useInitial = () => {
    const [status, setStatus] = useState({
        loading: false,
        error: false
    })
    /*
      Implement hook functionality here.
      If you need to execute async operation, set loading to true and when it's over, set loading to false.
      If you caught some errors, set error status to true.
      Initial hook is considered to be successfully completed if it will return {loading: false, error: false}.
    */
  /*
   Здесь можно реализовать функцию перехвата.
   Если вам нужно выполнить асинхронную операцию, установите для загрузки значение true, а когда она закончится, установите для загрузки значение false.
   Если вы обнаружили какие-либо ошибки, установите для статуса ошибки значение true.
   Начальный хук считается успешно завершенным, если он вернет {loading: false, error: false}.
  */

    return status
}
