import { INCREMENT, DECREMENT } from './counter.types';

const INITIAL_STATE  = [
  {
      title: "Правила техники безопасности",
      description: "Пожарная безопасность, охрана труда, санитарные правила, правила поведения в кабинете.",
      link_prezentation: "https://docs.google.com/presentation/d/e/2PACX-1vToOuWmxvLp2FfAx2nUebUxv25XYNWerTSysO8iht9rozDNDgLOiDV8rU8San6zV4UeQJo0MRpQb_BM",
      download_prez: "https://docs.google.com/presentation/d/1A-_-HAILLYN-2flz87-oFkshw6BX41t9C5EQkuWQi-U/edit?usp=sharing",
      download_instruction: "",
      download_task: ""
  },
  {
      title: 'Компьютер в жизни человека. Знакомство с компьютером. Программы.',
      description: 'Основные устройства компьютера и технические средства, с помощью которых может быть реализован ввод информации (текста, звука, изображения) в компьютер.',
      link_prezentation: 'https://docs.google.com/presentation/d/e/2PACX-1vRCsFaicHP3XJdYZDqasjhlslCsWUt7AxHAoKxfyOzQflwojatvrD6pWWDAY1Tz-6aAzQM_I6rYZfqZ',
      download_prez: 'https://docs.google.com/presentation/d/1A-_-HAILLYN-2flz87-oFkshw6BX41t9C5EQkuWQi-U/edit?usp=sharing',
      download_instruction: '',
      download_task: ''
  },
  {
      title: 'Знакомство с графическим редактором Paint.',
      description: 'Интерфейс графического редактора и его основные объекты. Панель палитра. Панель инструменты. Настройка инструментов рисования. Создание рисунков с помощью инструментов.',
      link_prezentation: 'https://docs.google.com/presentation/d/e/2PACX-1vS4ri64gIG185dQWRkG54-Tsj8JisjU4Ms7eGlGe525jPlilJMws-9ejAjnrx_MPbNaVmDKxbSdr7E4',
      download_prez: 'https://docs.google.com/presentation/d/1XEZ2QJHt8EaIh2Ws7RlqwX20DOa42pFHxG2sRjaHtOU/edit?usp=sharing',
      download_instruction: '',
      download_task: ''
  },
  {
      title: 'Функция раскрашивания при помощи графического редактора.',
      description: 'Изучение инструментов раскрашивания',
      link_prezentation: 'https://docs.google.com/presentation/d/e/2PACX-1vSR01olOFvrS6rPN0sTfic3zdoDYJTKCVWxUl3hPvZkp4LDF5vGM5b8TnSZvVFhseM_YtH8YO5rEHYf',
      download_prez: 'https://docs.google.com/presentation/d/1iMp3FgDatgGQ2U6QPnQ3tf2hxsI8L3nAykVPD2IFPSE/edit?usp=sharing',
      download_instruction: 'https://docs.google.com/document/d/11LWDUQoQm-imxsH_-tkEhEOQ_T5KLy-_JAVVIBMOFMI/edit?usp=sharing',
      download_task: 'https://docs.google.com/document/d/1ifKCH6B1ZOiScE4j5aHaGCFMg2jDgRZlhNvSsou3de4/edit?usp=sharing'
  },
  {
      title: 'Создание ровных изображений клавишей Shift.(Линии, орнамент, цвет)',
      description: 'Инструменты рисования. Создание рисунков с помощью клавиши Shift.',
      link_prezentation: 'https://docs.google.com/presentation/d/e/2PACX-1vRUu6ZdvUI7hdblTBtXruZAlzfKRTCksi-5NDYg0ps4n949P9HfSvu32FJYF8e4vHlETj7nAgE9s9Fw',
      download_prez: 'https://docs.google.com/presentation/d/1wYhXZr4C5Sa4vWizJolRYA_q5Kw7MgMuce8eW0tY3aE/edit?usp=sharing',
      download_instruction: 'https://docs.google.com/document/d/1AIVDWObvgzCzT0jJoATRp6K1sKEcDMi6b2pUdQFTpi4/edit?usp=sharing',
      download_task: 'https://docs.google.com/document/d/1PAUXnyOC27iaNgvYDYekPFrsmkwTHInSPamus9v075Q/edit?usp=sharing'
  },
  {
      title: 'Использование кистей в рисунке.',
      description: 'Изучение кистей и создание рисунка.',
      link_prezentation: 'https://docs.google.com/presentation/d/e/2PACX-1vRMBSfnupC2J-91yveIlsvxG4nE1g3LEK2x22rL_2si8Rs99Su1DVw1TuWrq2i_B_IeVLrRTsXDdbLu',
      download_prez: 'https://docs.google.com/presentation/d/1VpvKR2YWUSz4oBCHD4RCsGt9WuISkfEamFmC7LZ-Z98/edit?usp=sharing',
      download_instruction: 'https://docs.google.com/document/d/1BgCjf5Zi9-wURm3-O_qn2ni6dTkxQQCgsOQvEjRlShQ/edit?usp=sharing',
      download_task: 'https://docs.google.com/document/d/1A3sS0-EqDhdYK9xO8bcoj6GVsgPfrLHZV5Cfo5BFuYI/edit?usp=sharing'
  },
  {
      title: 'Изменение рисунка при помощи инструментов.',
      description: 'Исправление ошибок и внесение изменений. Работа с фрагментами: удаление, перемещение, копирование. Преобразование фрагментов.',
      link_prezentation: 'https://docs.google.com/presentation/d/e/2PACX-1vRgx_1TjQWboASz6-j8h5d3ivf2njGzftG3YFxRW7pNgb4nzQGFjS7PTrq6nLO33cX2CUqLN8j3eAcg',
      download_prez: 'https://docs.google.com/presentation/d/1PR-l8QkHcMvhHnY759pZHCic1Jw55WnVcj-KL0lugrg/edit?usp=sharing',
      download_instruction: '',
      download_task: ''
  },
  {
      title: 'Выделение',
      description: 'Создание изображений при помощи выделения',
      link_prezentation: 'https://docs.google.com/presentation/d/e/2PACX-1vT2ZuJ8vRZbH-JqCIpQpis5U-9Gbmng2TzVRRTz2gL_RXq9wB2iu4kqasXW1MiWU_dHxWHeQalE_QlJ',
      download_prez: 'https://docs.google.com/presentation/d/1l7e0yLy_aZ2CbNUXguVlm0TSEbnEC_hPn1cgQ3RklGk/edit?usp=sharing',
      download_instruction: 'https://docs.google.com/document/d/1EPWA0G5W63IqfPzRA3uRqXA80BOdF85inzPrRs8WovA/edit?usp=sharing',
      download_task: 'https://docs.google.com/document/d/18mpbcUrSrScyUFyXmSZceZqig6ZMenPK8eoGLOJ8UB0/edit?usp=sharing'
  },
  {
      title: 'Шрифт. Виды шрифтов. Выделение',
      description: 'Графический редактор Paint, Работа с фрагментами. Создание надписей в графическом редакторе. Создание поздравительной открытки.',
      link_prezentation: 'https://docs.google.com/presentation/d/e/2PACX-1vSzLmHeKCIbLG9w7_SCuo80IOq5N6EOrtCh74ZRDcRFyfaaFaAPg5sW2W5tmHx6zqo6qIC3BR4lAZ6x',
      download_prez: 'https://docs.google.com/presentation/d/1GrolPPjjeCHLzuI34cS9j9L8acahfbwQXNPAihU6rCU/edit?usp=sharing',
      download_instruction: '',
      download_task: ''
  },
  {
      title: 'Проект. Рисунок себя в будущем',
      description: 'Создание рисунка “Каким вы видите себя в будущем”',
      link_prezentation: 'https://docs.google.com/presentation/d/e/2PACX-1vQT7dS0bS_EBvmhVgHCGwWzYJ6nxs_L0DkyeM0pPgE2-Um6YIvhaJIZUayWtQVvSinHzc0YsBwdYn3S',
      download_prez: 'https://docs.google.com/presentation/d/19C_mzmjKnuCDYeErp-hB1nuFeInh_5yDMShctiaqQE4/edit?usp=sharing',
      download_instruction: '',
      download_task: ''
  }
]
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
           return {
             ...state, count: state.count + 1,
           };
        case DECREMENT:
           return {
              ...state, count: state.count - 1,
           };
         default: return state;
    }
};
export default reducer;