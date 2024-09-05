// The game object class for a troop and the battle-related data.
function Game_Troop() {
    this.initialize.apply(this, arguments);
}


Game_Troop.prototype = Object.create(Game_Unit.prototype);

Game_Troop.LETTER_TABLE_HALF = [
    ' A',' B',' C',' D',' E',' F',' G',' H',' I',' J',' K',' L',' M',
    ' N',' O',' P',' Q',' R',' S',' T',' U',' V',' W',' X',' Y',' Z'
];

Game_Troop.LETTER_TABLE_FULL = [
    'Ａ','Ｂ','Ｃ','Ｄ','Ｅ','Ｆ','Ｇ','Ｈ','Ｉ','Ｊ','Ｋ','Ｌ','Ｍ',
    'Ｎ','Ｏ','Ｐ','Ｑ','Ｒ','Ｓ','Ｔ','Ｕ','Ｖ','Ｗ','Ｘ','Ｙ','Ｚ'
];
