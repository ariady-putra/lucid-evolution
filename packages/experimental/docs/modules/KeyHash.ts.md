---
title: KeyHash.ts
nav_order: 298
parent: Modules
---

## KeyHash overview

---

<h2 class="text-delta">Table of contents</h2>

- [constants](#constants)
  - [KEYHASH_BYTES_LENGTH](#keyhash_bytes_length)
  - [KEYHASH_HEX_LENGTH](#keyhash_hex_length)
- [constructors](#constructors)
  - [fromBytes](#frombytes)
  - [fromBytesOrThrow](#frombytesorthrow)
  - [make](#make)
  - [makeOrThrow](#makeorthrow)
- [encoding/decoding](#encodingdecoding)
  - [fromCBOR](#fromcbor)
  - [fromCBORBytes](#fromcborbytes)
  - [fromCBORBytesOrThrow](#fromcborbytesorthrow)
  - [fromCBOROrThrow](#fromcbororthrow)
  - [toCBOR](#tocbor)
  - [toCBORBytes](#tocborbytes)
- [errors](#errors)
  - [KeyHashError (class)](#keyhasherror-class)
- [schemas](#schemas)
  - [KeyHash (class)](#keyhash-class)
- [transformation](#transformation)
  - [toBytes](#tobytes)

---

# constants

## KEYHASH_BYTES_LENGTH

The length in bytes of a KeyHash.

**Signature**

```ts
export declare const KEYHASH_BYTES_LENGTH: 28;
```

Added in v2.0.0

## KEYHASH_HEX_LENGTH

The length in hex characters of a KeyHash.

**Signature**

```ts
export declare const KEYHASH_HEX_LENGTH: 56;
```

Added in v2.0.0

# constructors

## fromBytes

Create a KeyHash directly from bytes.

**Signature**

```ts
export declare const fromBytes: SerdeImpl.FromBytes<KeyHash, KeyHashError>;
```

**Example**

```ts
import { KeyHash, Bytes } from "@lucid-evolution/experimental";
import { Effect } from "effect";
import assert from "assert";

const bytes = Bytes.fromHexOrThrow(
  "c37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f",
);
const keyHashEffect = KeyHash.fromBytes(bytes);
const keyHash = Effect.runSync(keyHashEffect);
assert(keyHash._tag === "KeyHash");
assert(
  keyHash.hash === "c37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f",
);
```

Added in v2.0.0

## fromBytesOrThrow

Create a KeyHash directly from bytes, throws on error.

**Signature**

```ts
export declare const fromBytesOrThrow: (bytes: Uint8Array) => KeyHash;
```

**Example**

```ts
import { KeyHash, Bytes } from "@lucid-evolution/experimental";
import assert from "assert";

const bytes = Bytes.fromHexOrThrow(
  "c37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f",
);
assert(bytes.length === 28);
const keyHash = KeyHash.fromBytesOrThrow(bytes);
assert(keyHash._tag === "KeyHash");
assert(
  keyHash.hash === "c37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f",
);
```

Added in v2.0.0

## make

Construct a KeyHash from a hex string.

**Signature**

```ts
export declare const make: SerdeImpl.Make<KeyHash, KeyHashError>;
```

**Example**

```ts
import { KeyHash } from "@lucid-evolution/experimental";
import { Effect } from "effect";
import assert from "assert";

const hash = "c37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f";
const keyHashEffect = KeyHash.make(hash);
const keyHash = Effect.runSync(keyHashEffect);
assert(keyHash._tag === "KeyHash");
assert(keyHash.hash === hash);
```

Added in v2.0.0

## makeOrThrow

Construct a KeyHash from a hex string, throws on error.

**Signature**

```ts
export declare const makeOrThrow: SerdeImpl.MakeOrThrow<KeyHash>;
```

**Example**

```ts
import { KeyHash } from "@lucid-evolution/experimental";
import assert from "assert";

const hash = "c37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f";
const keyHash = KeyHash.makeOrThrow(hash);
assert(keyHash._tag === "KeyHash");
assert(keyHash.hash === hash);
```

Added in v2.0.0

# encoding/decoding

## fromCBOR

Create a KeyHash from a CBOR hex string.

**Signature**

```ts
export declare const fromCBOR: SerdeImpl.FromCBOR<
  KeyHash,
  CBOR.CBORError | Bytes.BytesError | KeyHashError
>;
```

**Example**

```ts
import { KeyHash } from "@lucid-evolution/experimental";
import { Effect } from "effect";
import assert from "assert";

const cborHex = "581cc37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f";
const keyHashEffect = KeyHash.fromCBOR(cborHex);
const keyHash = Effect.runSync(keyHashEffect);
assert(keyHash._tag === "KeyHash");
assert(
  keyHash.hash === "c37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f",
);
```

Added in v2.0.0

## fromCBORBytes

Create a KeyHash from CBOR bytes.

**Signature**

```ts
export declare const fromCBORBytes: SerdeImpl.FromCBORBytes<
  KeyHash,
  CBOR.CBORError | KeyHashError
>;
```

**Example**

```ts
import { KeyHash, Bytes } from "@lucid-evolution/experimental";
import { Effect } from "effect";
import assert from "assert";

const bytes = Bytes.fromHexOrThrow(
  "581cc37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f",
);
const keyHashEffect = KeyHash.fromCBORBytes(bytes);
const keyHash = Effect.runSync(keyHashEffect);
assert(keyHash._tag === "KeyHash");
assert(
  keyHash.hash === "c37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f",
);
```

Added in v2.0.0

## fromCBORBytesOrThrow

Create a KeyHash from CBOR bytes, throws on error.

**Signature**

```ts
export declare const fromCBORBytesOrThrow: (bytes: Uint8Array) => KeyHash;
```

**Example**

```ts
import { KeyHash, Bytes } from "@lucid-evolution/experimental";
import assert from "assert";

const bytes = Bytes.fromHexOrThrow(
  "581cc37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f",
);
const keyHash = KeyHash.fromCBORBytesOrThrow(bytes);
assert(keyHash._tag === "KeyHash");
assert(
  keyHash.hash === "c37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f",
);
```

Added in v2.0.0

## fromCBOROrThrow

Create a KeyHash from a CBOR hex string, throws on error.

**Signature**

```ts
export declare const fromCBOROrThrow: (cborHex: string) => KeyHash;
```

**Example**

```ts
import { KeyHash } from "@lucid-evolution/experimental";
import assert from "assert";

const keyHash = KeyHash.fromCBOROrThrow(
  "581cc37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f",
);
assert(keyHash._tag === "KeyHash");
assert(
  keyHash.hash === "c37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f",
);
```

Added in v2.0.0

## toCBOR

Convert a KeyHash to CBOR hex string.

**Signature**

```ts
export declare const toCBOR: SerdeImpl.ToCBOR<KeyHash>;
```

**Example**

```ts
import { KeyHash } from "@lucid-evolution/experimental";
import assert from "assert";

const keyHash = KeyHash.makeOrThrow(
  "c37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f",
);
const hex = KeyHash.toCBOR(keyHash);
assert(hex.startsWith("581c"));
assert(
  hex.includes("c37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f"),
);
```

Added in v2.0.0

## toCBORBytes

Convert a KeyHash to CBOR bytes.

**Signature**

```ts
export declare const toCBORBytes: SerdeImpl.ToCBORBytes<KeyHash>;
```

**Example**

```ts
import { KeyHash, Bytes } from "@lucid-evolution/experimental";
import assert from "assert";

const keyHash = KeyHash.makeOrThrow(
  "c37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f",
);
const bytes = KeyHash.toCBORBytes(keyHash);
assert(bytes instanceof Uint8Array);
assert(bytes.length > 0);
```

Added in v2.0.0

# errors

## KeyHashError (class)

Error class for KeyHash related operations.

**Signature**

```ts
export declare class KeyHashError
```

**Example**

```ts
import { KeyHash } from "@lucid-evolution/experimental";
import assert from "assert";

const error = new KeyHash.KeyHashError({ message: "Invalid key hash" });
assert(error.message === "Invalid key hash");
```

Added in v2.0.0

# schemas

## KeyHash (class)

Schema for KeyHash representing a verification key hash.
Follows CIP-0019 binary representation.

**Signature**

```ts
export declare class KeyHash
```

Added in v2.0.0

# transformation

## toBytes

Convert a KeyHash to bytes.

**Signature**

```ts
export declare const toBytes: SerdeImpl.ToBytes<KeyHash>;
```

**Example**

```ts
import { KeyHash, Bytes } from "@lucid-evolution/experimental";
import assert from "assert";

const keyHash = KeyHash.makeOrThrow(
  "c37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f",
);
const bytes = KeyHash.toBytes(keyHash);
assert(bytes instanceof Uint8Array);
assert(bytes.length === 28);
assert(
  Bytes.toHexOrThrow(bytes) ===
    "c37b1b5dc0669f1d3c61a6fddb2e8fde96be87b881c60bce8e8d542f",
);
```

Added in v2.0.0
