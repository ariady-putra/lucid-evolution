/**
 * @since 2.0.0
 */
import { Data, Effect } from "effect";
import * as CML from "@anastasia-labs/cardano-multiplatform-lib-nodejs";

/**
 * Error class for emip3_encrypt_with_password function
 *
 * This error is thrown when the emip3_encrypt_with_password function fails.
 *
 * @since 2.0.0
 * @category Errors
 */
export class Emip3EncryptWithPasswordError extends Data.TaggedError(
  "Emip3EncryptWithPasswordError",
)<{
  message?: string;
}> {}

/**
 * Wrapper for the emip3_encrypt_with_password function
 *
 * @since 2.0.0
 * @category Functions
 */
export const emip3EncryptWithPassword: (
  password: string,
  salt: string,
  nonce: string,
  data: string,
) => Effect.Effect<string, Emip3EncryptWithPasswordError> = Effect.fn(
  function* (password: string, salt: string, nonce: string, data: string) {
    return yield* Effect.try({
      try: () => CML.emip3_encrypt_with_password(password, salt, nonce, data),
      catch: () =>
        new Emip3EncryptWithPasswordError({
          message: `emip3_encrypt_with_password failed with parameters: ${password}, ${salt}, ${nonce}, ${data}.`,
        }),
    });
  },
);

/**
 * Unsafely calls emip3_encrypt_with_password function without Effect wrapper
 *
 * @since 2.0.0
 * @category FunctionsUnsafe
 */
export const emip3EncryptWithPasswordUnsafe = (
  password: string,
  salt: string,
  nonce: string,
  data: string,
): string =>
  Effect.runSync(emip3EncryptWithPassword(password, salt, nonce, data));
