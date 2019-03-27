/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import ngMock from 'ng_mock';
import expect from '@kbn/expect';
import { VislibSeriesResponseHandlerProvider } from '../../response_handlers/vislib';

describe('Basic Response Handler', function () {
  let basicResponseHandler;

  beforeEach(ngMock.module('kibana'));
  beforeEach(ngMock.inject(function (Private) {
    basicResponseHandler = Private(VislibSeriesResponseHandlerProvider).handler;
  }));

  it('returns empty object if conversion failed', () => {
    basicResponseHandler({}).then(data => {
      expect(data).to.not.be.an('undefined');
      expect(data.rows).to.equal([]);
    });
  });

  it('returns empty object if no data was found', () => {
    basicResponseHandler({ columns: [{ id: '1', title: '1', aggConfig: {} }], rows: [] }).then(data => {
      expect(data).to.not.be.an('undefined');
      expect(data.rows).to.equal([]);
    });
  });

});
