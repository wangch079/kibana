/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { z } from 'zod';

/*
 * NOTICE: Do not edit this file manually.
 * This file is automatically generated by the OpenAPI Generator, @kbn/openapi-generator.
 *
 * info:
 *   title: Asset Criticality Create Record Schema
 *   version: 1.0.0
 */

export type ErrorItem = z.infer<typeof ErrorItem>;
export const ErrorItem = z.object({
  message: z.string(),
  index: z.number().int(),
});

export type Stats = z.infer<typeof Stats>;
export const Stats = z.object({
  successful: z.number().int(),
  failed: z.number().int(),
  total: z.number().int(),
});

export type AssetCriticalityCsvUploadResponse = z.infer<typeof AssetCriticalityCsvUploadResponse>;
export const AssetCriticalityCsvUploadResponse = z.object({
  errors: z.array(ErrorItem),
  stats: Stats,
});
