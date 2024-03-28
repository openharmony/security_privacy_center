/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type Want from '@ohos.app.ability.Want';
import type UIAbilityContext from 'application/UIAbilityContext';

export class PwdStore {
  private certPwd: string = '';
  setCertPwd(pwd: string): void {
    this.certPwd = pwd;
  }

  getCertPwd(): string {
    return this.certPwd;
  }

  clearCertPwd(): void {
    this.certPwd = '';
  }
}

export class GlobalContext {
  private constructor() {};
  private static instance: GlobalContext;
  private context: UIAbilityContext;
  private want: Want;
  private pwdStore: PwdStore;

  public static getContext(): GlobalContext {
    if (!GlobalContext.instance) {
      GlobalContext.instance = new GlobalContext();
    }
    return GlobalContext.instance;
  }

  getCmContext(): UIAbilityContext {
    return this.context;
  }

  getPwdStore(): PwdStore {
    return this.pwdStore;
  }

  getAbilityWant(): Want {
    return this.want;
  }

  setCmContext(context: UIAbilityContext): void {
    this.context = context;
  }

  setPwdStore(pwdStore: PwdStore): void {
    this.pwdStore = pwdStore;
  }

  setAbilityWant(want: Want): void {
    this.want = want;
  }

  clearAbilityWantUri(): void {
    this.want.uri = '';
  }
}