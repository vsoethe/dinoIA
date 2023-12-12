export default {
    jump: new KeyboardEvent('keydown', { key: 'Space', keyCode: 32 }),  //Pular
    crouch: new KeyboardEvent('keydown', { key: 'ArrowDown', keyCode: 40 }), //Agachar
    dispatch(event) {
      document.dispatchEvent(this[event]);
    }
}