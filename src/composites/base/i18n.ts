import log from 'loglevel';
import format from 'string-format-obj';
import { get } from 'lodash';
import { Wrapper } from 'vue-function-api';
import { Newable } from '../../models';
import { msgs } from '../../utils/locale_messages';

let locale: Wrapper<string>;

function initI18n(appLocale: Wrapper<string>) {
  log.info('setting up i18n...');
  locale = appLocale;
}

function useI18n() {
  const msg = (key: string, obj?: any) => {
    if (!obj) return get(msgs, `${locale.value}.${key}`);
    return format(get(msgs, `${locale.value}.${key}`), obj);
  };

  const getLocalizedFieldNames = (formType: Newable<any>) => get(msgs, `${locale.value}.fieldNames.${formType.name}`);
  const getLocalizedErrorMsgs = () => get(msgs, `${locale.value}.errors`);

  return { msg, getLocalizedFieldNames, getLocalizedErrorMsgs };
}

export { initI18n, useI18n };
