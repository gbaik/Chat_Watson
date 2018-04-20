import React from 'react';
import { Field } from 'redux-form';

const LanguageMenu = ({}) => (
  <div>
    <Field name = 'outputLanguage' component = 'select'>
      <option>-----</option>
      <option value = 'af'>Afrikaans</option>
      <option value = 'ar'>Arabic</option>
      <option value = 'az'>Azerbaijani</option>
      <option value = 'ba'>Bashkir</option>
      <option value = 'be'>Belarusian</option>
      <option value = 'bg'>Bulgarian</option>
      <option value = 'bn'>Bengali</option>
      <option value = 'bs'>Bosnian</option>
      <option value = 'cs'>Czech</option>
      <option value = 'cv'>Chuvash</option>
      <option value = 'da'>Danish</option>
      <option value = 'de'>German</option>
      <option value = 'el'>Greek</option>
      <option value = 'en'>English</option>
      <option value = 'eo'>Esperanto</option>
      <option value = 'es'>Spanish</option>
      <option value = 'et'>Estonian</option>
      <option value = 'eu'>Basque</option>
      <option value = 'fa'>Persian</option>
      <option value = 'fi'>Finnish</option>
      <option value = 'fr'>French</option>
      <option value = 'gu'>Gujarati</option>
      <option value = 'he'>Hebrew</option>
      <option value = 'hi'>Hindi</option>
      <option value = 'ht'>Haitian</option>
      <option value = 'hu'>Hungarian</option>
      <option value = 'hy'>Armenian</option>
      <option value = 'id'>Indonesian</option>
      <option value = 'is'>Icelandic</option>
      <option value = 'it'>Italian</option>
      <option value = 'ja'>Japanese</option>
      <option value = 'ka'>Georgian</option>
      <option value = 'kk'>Kazakh</option>
      <option value = 'km'>Central Khmer</option>
      <option value = 'ko'>Korean</option>
      <option value = 'ku'>Kurdish</option>
      <option value = 'ky'>Kirghiz</option>
      <option value = 'lv'>Latvian</option>
      <option value = 'ml'>Malayalam</option>
      <option value = 'mn'>Mongolian</option>
      <option value = 'nb'>Norwegian Bokmal</option>
      <option value = 'nl'>Dutch</option>
      <option value = 'nn'>Norwegian Nynorsk</option>
      <option value = 'pa'>Panjabi</option>
      <option value = 'pl'>Polish</option>
      <option value = 'ps'>Pushto</option>
      <option value = 'pt'>Portuguese</option>
      <option value = 'ro'>Romanian</option>
      <option value = 'ru'>Russian</option>
      <option value = 'sk'>Slovakian</option>
      <option value = 'so'>Somali</option>
      <option value = 'sq'>Albanian</option>
      <option value = 'ta'>Tamil</option>
      <option value = 'te'>Telugu</option>
      <option value = 'tr'>Turkish</option>
      <option value = 'uk'>Ukrainian</option>
      <option value = 'ur'>Urdu</option>
      <option value = 'vi'>Vietnamese</option>
      <option value = 'zh'>Chinese</option>
      <option value = 'zh-TW'>Traditional Chinese</option>
    </Field>
  </div>
);

export default LanguageMenu;
