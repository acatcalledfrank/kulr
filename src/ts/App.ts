import * as picky from 'picky';
import {Swatch} from './popup/swatch/Swatch';

export default class App
{
    static toggle: picky.Toggle;
    static state: picky.State;
    static events: picky.Events;
    static popup: picky.Popup;
    static palette: picky.ColourPalette;
    static huePane: picky.HuePane;
    static tonePane: picky.TonePane;
    static swatches: Swatch[];
    static textInput: picky.TextInput;
    
    constructor()
    {
        
    }
}