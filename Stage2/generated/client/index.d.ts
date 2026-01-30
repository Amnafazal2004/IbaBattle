
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Services
 * 
 */
export type Services = $Result.DefaultSelection<Prisma.$ServicesPayload>
/**
 * Model Bookings
 * 
 */
export type Bookings = $Result.DefaultSelection<Prisma.$BookingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  provider: 'provider',
  seeker: 'seeker'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.services`: Exposes CRUD operations for the **Services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.services.findMany()
    * ```
    */
  get services(): Prisma.ServicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookings`: Exposes CRUD operations for the **Bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.BookingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Profile: 'Profile',
    Services: 'Services',
    Bookings: 'Bookings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profile" | "services" | "bookings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Services: {
        payload: Prisma.$ServicesPayload<ExtArgs>
        fields: Prisma.ServicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          findFirst: {
            args: Prisma.ServicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          findMany: {
            args: Prisma.ServicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>[]
          }
          create: {
            args: Prisma.ServicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          createMany: {
            args: Prisma.ServicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>[]
          }
          delete: {
            args: Prisma.ServicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          update: {
            args: Prisma.ServicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          deleteMany: {
            args: Prisma.ServicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>[]
          }
          upsert: {
            args: Prisma.ServicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          aggregate: {
            args: Prisma.ServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServices>
          }
          groupBy: {
            args: Prisma.ServicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicesCountArgs<ExtArgs>
            result: $Utils.Optional<ServicesCountAggregateOutputType> | number
          }
        }
      }
      Bookings: {
        payload: Prisma.$BookingsPayload<ExtArgs>
        fields: Prisma.BookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findFirst: {
            args: Prisma.BookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findMany: {
            args: Prisma.BookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          create: {
            args: Prisma.BookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          createMany: {
            args: Prisma.BookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          delete: {
            args: Prisma.BookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          update: {
            args: Prisma.BookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          deleteMany: {
            args: Prisma.BookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          upsert: {
            args: Prisma.BookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.BookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    profile?: ProfileOmit
    services?: ServicesOmit
    bookings?: BookingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    bookings: number
    services: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ProfileCountOutputTypeCountBookingsArgs
    services?: boolean | ProfileCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicesWhereInput
  }


  /**
   * Count Type ServicesCountOutputType
   */

  export type ServicesCountOutputType = {
    bookings: number
  }

  export type ServicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ServicesCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesCountOutputType
     */
    select?: ServicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    createdAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    email: string
    name: string | null
    role: $Enums.Role
    createdAt: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    bookings?: boolean | Profile$bookingsArgs<ExtArgs>
    services?: boolean | Profile$servicesArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "createdAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Profile$bookingsArgs<ExtArgs>
    services?: boolean | Profile$servicesArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      bookings: Prisma.$BookingsPayload<ExtArgs>[]
      services: Prisma.$ServicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Profile$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends Profile$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly role: FieldRef<"Profile", 'Role'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.bookings
   */
  export type Profile$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Profile.services
   */
  export type Profile$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    where?: ServicesWhereInput
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    cursor?: ServicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Services
   */

  export type AggregateServices = {
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  export type ServicesAvgAggregateOutputType = {
    price: number | null
  }

  export type ServicesSumAggregateOutputType = {
    price: number | null
  }

  export type ServicesMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    neighbour: string | null
    price: number | null
    authorId: string | null
  }

  export type ServicesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    neighbour: string | null
    price: number | null
    authorId: string | null
  }

  export type ServicesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    neighbour: number
    price: number
    authorId: number
    _all: number
  }


  export type ServicesAvgAggregateInputType = {
    price?: true
  }

  export type ServicesSumAggregateInputType = {
    price?: true
  }

  export type ServicesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    neighbour?: true
    price?: true
    authorId?: true
  }

  export type ServicesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    neighbour?: true
    price?: true
    authorId?: true
  }

  export type ServicesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    neighbour?: true
    price?: true
    authorId?: true
    _all?: true
  }

  export type ServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to aggregate.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicesMaxAggregateInputType
  }

  export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServices[P]>
      : GetScalarType<T[P], AggregateServices[P]>
  }




  export type ServicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicesWhereInput
    orderBy?: ServicesOrderByWithAggregationInput | ServicesOrderByWithAggregationInput[]
    by: ServicesScalarFieldEnum[] | ServicesScalarFieldEnum
    having?: ServicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicesCountAggregateInputType | true
    _avg?: ServicesAvgAggregateInputType
    _sum?: ServicesSumAggregateInputType
    _min?: ServicesMinAggregateInputType
    _max?: ServicesMaxAggregateInputType
  }

  export type ServicesGroupByOutputType = {
    id: string
    title: string
    description: string
    category: string
    neighbour: string
    price: number
    authorId: string
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  type GetServicesGroupByPayload<T extends ServicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ServicesGroupByOutputType[P]>
        }
      >
    >


  export type ServicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    neighbour?: boolean
    price?: boolean
    authorId?: boolean
    bookings?: boolean | Services$bookingsArgs<ExtArgs>
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    _count?: boolean | ServicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    neighbour?: boolean
    price?: boolean
    authorId?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    neighbour?: boolean
    price?: boolean
    authorId?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    neighbour?: boolean
    price?: boolean
    authorId?: boolean
  }

  export type ServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "neighbour" | "price" | "authorId", ExtArgs["result"]["services"]>
  export type ServicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Services$bookingsArgs<ExtArgs>
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    _count?: boolean | ServicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type ServicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $ServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Services"
    objects: {
      bookings: Prisma.$BookingsPayload<ExtArgs>[]
      author: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: string
      neighbour: string
      price: number
      authorId: string
    }, ExtArgs["result"]["services"]>
    composites: {}
  }

  type ServicesGetPayload<S extends boolean | null | undefined | ServicesDefaultArgs> = $Result.GetResult<Prisma.$ServicesPayload, S>

  type ServicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicesCountAggregateInputType | true
    }

  export interface ServicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Services'], meta: { name: 'Services' } }
    /**
     * Find zero or one Services that matches the filter.
     * @param {ServicesFindUniqueArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicesFindUniqueArgs>(args: SelectSubset<T, ServicesFindUniqueArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Services that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicesFindUniqueOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicesFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindFirstArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicesFindFirstArgs>(args?: SelectSubset<T, ServicesFindFirstArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindFirstOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicesFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.services.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.services.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicesWithIdOnly = await prisma.services.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicesFindManyArgs>(args?: SelectSubset<T, ServicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Services.
     * @param {ServicesCreateArgs} args - Arguments to create a Services.
     * @example
     * // Create one Services
     * const Services = await prisma.services.create({
     *   data: {
     *     // ... data to create a Services
     *   }
     * })
     * 
     */
    create<T extends ServicesCreateArgs>(args: SelectSubset<T, ServicesCreateArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServicesCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicesCreateManyArgs>(args?: SelectSubset<T, ServicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServicesCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicesCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Services.
     * @param {ServicesDeleteArgs} args - Arguments to delete one Services.
     * @example
     * // Delete one Services
     * const Services = await prisma.services.delete({
     *   where: {
     *     // ... filter to delete one Services
     *   }
     * })
     * 
     */
    delete<T extends ServicesDeleteArgs>(args: SelectSubset<T, ServicesDeleteArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Services.
     * @param {ServicesUpdateArgs} args - Arguments to update one Services.
     * @example
     * // Update one Services
     * const services = await prisma.services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicesUpdateArgs>(args: SelectSubset<T, ServicesUpdateArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServicesDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicesDeleteManyArgs>(args?: SelectSubset<T, ServicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicesUpdateManyArgs>(args: SelectSubset<T, ServicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServicesUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicesUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Services.
     * @param {ServicesUpsertArgs} args - Arguments to update or create a Services.
     * @example
     * // Update or create a Services
     * const services = await prisma.services.upsert({
     *   create: {
     *     // ... data to create a Services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Services we want to update
     *   }
     * })
     */
    upsert<T extends ServicesUpsertArgs>(args: SelectSubset<T, ServicesUpsertArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.services.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServicesCountArgs>(
      args?: Subset<T, ServicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicesAggregateArgs>(args: Subset<T, ServicesAggregateArgs>): Prisma.PrismaPromise<GetServicesAggregateType<T>>

    /**
     * Group by Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicesGroupByArgs['orderBy'] }
        : { orderBy?: ServicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Services model
   */
  readonly fields: ServicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Services$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Services$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Services model
   */
  interface ServicesFieldRefs {
    readonly id: FieldRef<"Services", 'String'>
    readonly title: FieldRef<"Services", 'String'>
    readonly description: FieldRef<"Services", 'String'>
    readonly category: FieldRef<"Services", 'String'>
    readonly neighbour: FieldRef<"Services", 'String'>
    readonly price: FieldRef<"Services", 'Int'>
    readonly authorId: FieldRef<"Services", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Services findUnique
   */
  export type ServicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services findUniqueOrThrow
   */
  export type ServicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services findFirst
   */
  export type ServicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services findFirstOrThrow
   */
  export type ServicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services findMany
   */
  export type ServicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services create
   */
  export type ServicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * The data needed to create a Services.
     */
    data: XOR<ServicesCreateInput, ServicesUncheckedCreateInput>
  }

  /**
   * Services createMany
   */
  export type ServicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServicesCreateManyInput | ServicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Services createManyAndReturn
   */
  export type ServicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServicesCreateManyInput | ServicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Services update
   */
  export type ServicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * The data needed to update a Services.
     */
    data: XOR<ServicesUpdateInput, ServicesUncheckedUpdateInput>
    /**
     * Choose, which Services to update.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services updateMany
   */
  export type ServicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServicesUpdateManyMutationInput, ServicesUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServicesWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Services updateManyAndReturn
   */
  export type ServicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServicesUpdateManyMutationInput, ServicesUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServicesWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Services upsert
   */
  export type ServicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * The filter to search for the Services to update in case it exists.
     */
    where: ServicesWhereUniqueInput
    /**
     * In case the Services found by the `where` argument doesn't exist, create a new Services with this data.
     */
    create: XOR<ServicesCreateInput, ServicesUncheckedCreateInput>
    /**
     * In case the Services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicesUpdateInput, ServicesUncheckedUpdateInput>
  }

  /**
   * Services delete
   */
  export type ServicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
    /**
     * Filter which Services to delete.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services deleteMany
   */
  export type ServicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServicesWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Services.bookings
   */
  export type Services$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Services without action
   */
  export type ServicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesInclude<ExtArgs> | null
  }


  /**
   * Model Bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsMinAggregateOutputType = {
    id: string | null
    serviceId: string | null
    bookingDate: Date | null
    timeSlot: string | null
    authorId: string | null
  }

  export type BookingsMaxAggregateOutputType = {
    id: string | null
    serviceId: string | null
    bookingDate: Date | null
    timeSlot: string | null
    authorId: string | null
  }

  export type BookingsCountAggregateOutputType = {
    id: number
    serviceId: number
    bookingDate: number
    timeSlot: number
    authorId: number
    _all: number
  }


  export type BookingsMinAggregateInputType = {
    id?: true
    serviceId?: true
    bookingDate?: true
    timeSlot?: true
    authorId?: true
  }

  export type BookingsMaxAggregateInputType = {
    id?: true
    serviceId?: true
    bookingDate?: true
    timeSlot?: true
    authorId?: true
  }

  export type BookingsCountAggregateInputType = {
    id?: true
    serviceId?: true
    bookingDate?: true
    timeSlot?: true
    authorId?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to aggregate.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type BookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithAggregationInput | BookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: BookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    id: string
    serviceId: string
    bookingDate: Date
    timeSlot: string
    authorId: string
    _count: BookingsCountAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends BookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type BookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    bookingDate?: boolean
    timeSlot?: boolean
    authorId?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type BookingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    bookingDate?: boolean
    timeSlot?: boolean
    authorId?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type BookingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    bookingDate?: boolean
    timeSlot?: boolean
    authorId?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type BookingsSelectScalar = {
    id?: boolean
    serviceId?: boolean
    bookingDate?: boolean
    timeSlot?: boolean
    authorId?: boolean
  }

  export type BookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "bookingDate" | "timeSlot" | "authorId", ExtArgs["result"]["bookings"]>
  export type BookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }
  export type BookingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }
  export type BookingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
    service?: boolean | ServicesDefaultArgs<ExtArgs>
  }

  export type $BookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookings"
    objects: {
      author: Prisma.$ProfilePayload<ExtArgs>
      service: Prisma.$ServicesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceId: string
      bookingDate: Date
      timeSlot: string
      authorId: string
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type BookingsGetPayload<S extends boolean | null | undefined | BookingsDefaultArgs> = $Result.GetResult<Prisma.$BookingsPayload, S>

  type BookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface BookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookings'], meta: { name: 'Bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {BookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingsFindUniqueArgs>(args: SelectSubset<T, BookingsFindUniqueArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingsFindFirstArgs>(args?: SelectSubset<T, BookingsFindFirstArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingsWithIdOnly = await prisma.bookings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingsFindManyArgs>(args?: SelectSubset<T, BookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {BookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends BookingsCreateArgs>(args: SelectSubset<T, BookingsCreateArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingsCreateManyArgs>(args?: SelectSubset<T, BookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingsCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingsCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookings.
     * @param {BookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends BookingsDeleteArgs>(args: SelectSubset<T, BookingsDeleteArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {BookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingsUpdateArgs>(args: SelectSubset<T, BookingsUpdateArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingsDeleteManyArgs>(args?: SelectSubset<T, BookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingsUpdateManyArgs>(args: SelectSubset<T, BookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingsUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingsUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookings.
     * @param {BookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends BookingsUpsertArgs>(args: SelectSubset<T, BookingsUpsertArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingsCountArgs>(
      args?: Subset<T, BookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingsGroupByArgs['orderBy'] }
        : { orderBy?: BookingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookings model
   */
  readonly fields: BookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicesDefaultArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bookings model
   */
  interface BookingsFieldRefs {
    readonly id: FieldRef<"Bookings", 'String'>
    readonly serviceId: FieldRef<"Bookings", 'String'>
    readonly bookingDate: FieldRef<"Bookings", 'DateTime'>
    readonly timeSlot: FieldRef<"Bookings", 'String'>
    readonly authorId: FieldRef<"Bookings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bookings findUnique
   */
  export type BookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings findUniqueOrThrow
   */
  export type BookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings findFirst
   */
  export type BookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings findFirstOrThrow
   */
  export type BookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings findMany
   */
  export type BookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings create
   */
  export type BookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookings.
     */
    data: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
  }

  /**
   * Bookings createMany
   */
  export type BookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingsCreateManyInput | BookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookings createManyAndReturn
   */
  export type BookingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingsCreateManyInput | BookingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookings update
   */
  export type BookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookings.
     */
    data: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
    /**
     * Choose, which Bookings to update.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings updateMany
   */
  export type BookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Bookings updateManyAndReturn
   */
  export type BookingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookings upsert
   */
  export type BookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookings to update in case it exists.
     */
    where: BookingsWhereUniqueInput
    /**
     * In case the Bookings found by the `where` argument doesn't exist, create a new Bookings with this data.
     */
    create: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
    /**
     * In case the Bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
  }

  /**
   * Bookings delete
   */
  export type BookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter which Bookings to delete.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings deleteMany
   */
  export type BookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Bookings without action
   */
  export type BookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const ServicesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    neighbour: 'neighbour',
    price: 'price',
    authorId: 'authorId'
  };

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]


  export const BookingsScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    bookingDate: 'bookingDate',
    timeSlot: 'timeSlot',
    authorId: 'authorId'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: UuidFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    name?: StringNullableFilter<"Profile"> | string | null
    role?: EnumRoleFilter<"Profile"> | $Enums.Role
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    bookings?: BookingsListRelationFilter
    services?: ServicesListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    bookings?: BookingsOrderByRelationAggregateInput
    services?: ServicesOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    name?: StringNullableFilter<"Profile"> | string | null
    role?: EnumRoleFilter<"Profile"> | $Enums.Role
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    bookings?: BookingsListRelationFilter
    services?: ServicesListRelationFilter
  }, "id" | "email">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Profile"> | string
    email?: StringWithAggregatesFilter<"Profile"> | string
    name?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    role?: EnumRoleWithAggregatesFilter<"Profile"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type ServicesWhereInput = {
    AND?: ServicesWhereInput | ServicesWhereInput[]
    OR?: ServicesWhereInput[]
    NOT?: ServicesWhereInput | ServicesWhereInput[]
    id?: UuidFilter<"Services"> | string
    title?: StringFilter<"Services"> | string
    description?: StringFilter<"Services"> | string
    category?: StringFilter<"Services"> | string
    neighbour?: StringFilter<"Services"> | string
    price?: IntFilter<"Services"> | number
    authorId?: UuidFilter<"Services"> | string
    bookings?: BookingsListRelationFilter
    author?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type ServicesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    neighbour?: SortOrder
    price?: SortOrder
    authorId?: SortOrder
    bookings?: BookingsOrderByRelationAggregateInput
    author?: ProfileOrderByWithRelationInput
  }

  export type ServicesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServicesWhereInput | ServicesWhereInput[]
    OR?: ServicesWhereInput[]
    NOT?: ServicesWhereInput | ServicesWhereInput[]
    title?: StringFilter<"Services"> | string
    description?: StringFilter<"Services"> | string
    category?: StringFilter<"Services"> | string
    neighbour?: StringFilter<"Services"> | string
    price?: IntFilter<"Services"> | number
    authorId?: UuidFilter<"Services"> | string
    bookings?: BookingsListRelationFilter
    author?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type ServicesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    neighbour?: SortOrder
    price?: SortOrder
    authorId?: SortOrder
    _count?: ServicesCountOrderByAggregateInput
    _avg?: ServicesAvgOrderByAggregateInput
    _max?: ServicesMaxOrderByAggregateInput
    _min?: ServicesMinOrderByAggregateInput
    _sum?: ServicesSumOrderByAggregateInput
  }

  export type ServicesScalarWhereWithAggregatesInput = {
    AND?: ServicesScalarWhereWithAggregatesInput | ServicesScalarWhereWithAggregatesInput[]
    OR?: ServicesScalarWhereWithAggregatesInput[]
    NOT?: ServicesScalarWhereWithAggregatesInput | ServicesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Services"> | string
    title?: StringWithAggregatesFilter<"Services"> | string
    description?: StringWithAggregatesFilter<"Services"> | string
    category?: StringWithAggregatesFilter<"Services"> | string
    neighbour?: StringWithAggregatesFilter<"Services"> | string
    price?: IntWithAggregatesFilter<"Services"> | number
    authorId?: UuidWithAggregatesFilter<"Services"> | string
  }

  export type BookingsWhereInput = {
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    id?: UuidFilter<"Bookings"> | string
    serviceId?: UuidFilter<"Bookings"> | string
    bookingDate?: DateTimeFilter<"Bookings"> | Date | string
    timeSlot?: StringFilter<"Bookings"> | string
    authorId?: UuidFilter<"Bookings"> | string
    author?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    service?: XOR<ServicesScalarRelationFilter, ServicesWhereInput>
  }

  export type BookingsOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    bookingDate?: SortOrder
    timeSlot?: SortOrder
    authorId?: SortOrder
    author?: ProfileOrderByWithRelationInput
    service?: ServicesOrderByWithRelationInput
  }

  export type BookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    serviceId?: UuidFilter<"Bookings"> | string
    bookingDate?: DateTimeFilter<"Bookings"> | Date | string
    timeSlot?: StringFilter<"Bookings"> | string
    authorId?: UuidFilter<"Bookings"> | string
    author?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    service?: XOR<ServicesScalarRelationFilter, ServicesWhereInput>
  }, "id">

  export type BookingsOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    bookingDate?: SortOrder
    timeSlot?: SortOrder
    authorId?: SortOrder
    _count?: BookingsCountOrderByAggregateInput
    _max?: BookingsMaxOrderByAggregateInput
    _min?: BookingsMinOrderByAggregateInput
  }

  export type BookingsScalarWhereWithAggregatesInput = {
    AND?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    OR?: BookingsScalarWhereWithAggregatesInput[]
    NOT?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Bookings"> | string
    serviceId?: UuidWithAggregatesFilter<"Bookings"> | string
    bookingDate?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
    timeSlot?: StringWithAggregatesFilter<"Bookings"> | string
    authorId?: UuidWithAggregatesFilter<"Bookings"> | string
  }

  export type ProfileCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    bookings?: BookingsCreateNestedManyWithoutAuthorInput
    services?: ServicesCreateNestedManyWithoutAuthorInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    bookings?: BookingsUncheckedCreateNestedManyWithoutAuthorInput
    services?: ServicesUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingsUpdateManyWithoutAuthorNestedInput
    services?: ServicesUpdateManyWithoutAuthorNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingsUncheckedUpdateManyWithoutAuthorNestedInput
    services?: ServicesUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    neighbour: string
    price: number
    bookings?: BookingsCreateNestedManyWithoutServiceInput
    author: ProfileCreateNestedOneWithoutServicesInput
  }

  export type ServicesUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    neighbour: string
    price: number
    authorId: string
    bookings?: BookingsUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServicesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    neighbour?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    bookings?: BookingsUpdateManyWithoutServiceNestedInput
    author?: ProfileUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServicesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    neighbour?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    bookings?: BookingsUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServicesCreateManyInput = {
    id?: string
    title: string
    description: string
    category: string
    neighbour: string
    price: number
    authorId: string
  }

  export type ServicesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    neighbour?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ServicesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    neighbour?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingsCreateInput = {
    id?: string
    bookingDate: Date | string
    timeSlot: string
    author: ProfileCreateNestedOneWithoutBookingsInput
    service: ServicesCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateInput = {
    id?: string
    serviceId: string
    bookingDate: Date | string
    timeSlot: string
    authorId: string
  }

  export type BookingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    author?: ProfileUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServicesUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingsCreateManyInput = {
    id?: string
    serviceId: string
    bookingDate: Date | string
    timeSlot: string
    authorId: string
  }

  export type BookingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
  }

  export type BookingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookingsListRelationFilter = {
    every?: BookingsWhereInput
    some?: BookingsWhereInput
    none?: BookingsWhereInput
  }

  export type ServicesListRelationFilter = {
    every?: ServicesWhereInput
    some?: ServicesWhereInput
    none?: ServicesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type ServicesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    neighbour?: SortOrder
    price?: SortOrder
    authorId?: SortOrder
  }

  export type ServicesAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ServicesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    neighbour?: SortOrder
    price?: SortOrder
    authorId?: SortOrder
  }

  export type ServicesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    neighbour?: SortOrder
    price?: SortOrder
    authorId?: SortOrder
  }

  export type ServicesSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ServicesScalarRelationFilter = {
    is?: ServicesWhereInput
    isNot?: ServicesWhereInput
  }

  export type BookingsCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    bookingDate?: SortOrder
    timeSlot?: SortOrder
    authorId?: SortOrder
  }

  export type BookingsMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    bookingDate?: SortOrder
    timeSlot?: SortOrder
    authorId?: SortOrder
  }

  export type BookingsMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    bookingDate?: SortOrder
    timeSlot?: SortOrder
    authorId?: SortOrder
  }

  export type BookingsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookingsCreateWithoutAuthorInput, BookingsUncheckedCreateWithoutAuthorInput> | BookingsCreateWithoutAuthorInput[] | BookingsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutAuthorInput | BookingsCreateOrConnectWithoutAuthorInput[]
    createMany?: BookingsCreateManyAuthorInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type ServicesCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ServicesCreateWithoutAuthorInput, ServicesUncheckedCreateWithoutAuthorInput> | ServicesCreateWithoutAuthorInput[] | ServicesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ServicesCreateOrConnectWithoutAuthorInput | ServicesCreateOrConnectWithoutAuthorInput[]
    createMany?: ServicesCreateManyAuthorInputEnvelope
    connect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
  }

  export type BookingsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookingsCreateWithoutAuthorInput, BookingsUncheckedCreateWithoutAuthorInput> | BookingsCreateWithoutAuthorInput[] | BookingsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutAuthorInput | BookingsCreateOrConnectWithoutAuthorInput[]
    createMany?: BookingsCreateManyAuthorInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type ServicesUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ServicesCreateWithoutAuthorInput, ServicesUncheckedCreateWithoutAuthorInput> | ServicesCreateWithoutAuthorInput[] | ServicesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ServicesCreateOrConnectWithoutAuthorInput | ServicesCreateOrConnectWithoutAuthorInput[]
    createMany?: ServicesCreateManyAuthorInputEnvelope
    connect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookingsCreateWithoutAuthorInput, BookingsUncheckedCreateWithoutAuthorInput> | BookingsCreateWithoutAuthorInput[] | BookingsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutAuthorInput | BookingsCreateOrConnectWithoutAuthorInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutAuthorInput | BookingsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookingsCreateManyAuthorInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutAuthorInput | BookingsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutAuthorInput | BookingsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type ServicesUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ServicesCreateWithoutAuthorInput, ServicesUncheckedCreateWithoutAuthorInput> | ServicesCreateWithoutAuthorInput[] | ServicesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ServicesCreateOrConnectWithoutAuthorInput | ServicesCreateOrConnectWithoutAuthorInput[]
    upsert?: ServicesUpsertWithWhereUniqueWithoutAuthorInput | ServicesUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ServicesCreateManyAuthorInputEnvelope
    set?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    disconnect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    delete?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    connect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    update?: ServicesUpdateWithWhereUniqueWithoutAuthorInput | ServicesUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ServicesUpdateManyWithWhereWithoutAuthorInput | ServicesUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ServicesScalarWhereInput | ServicesScalarWhereInput[]
  }

  export type BookingsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookingsCreateWithoutAuthorInput, BookingsUncheckedCreateWithoutAuthorInput> | BookingsCreateWithoutAuthorInput[] | BookingsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutAuthorInput | BookingsCreateOrConnectWithoutAuthorInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutAuthorInput | BookingsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookingsCreateManyAuthorInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutAuthorInput | BookingsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutAuthorInput | BookingsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type ServicesUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ServicesCreateWithoutAuthorInput, ServicesUncheckedCreateWithoutAuthorInput> | ServicesCreateWithoutAuthorInput[] | ServicesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ServicesCreateOrConnectWithoutAuthorInput | ServicesCreateOrConnectWithoutAuthorInput[]
    upsert?: ServicesUpsertWithWhereUniqueWithoutAuthorInput | ServicesUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ServicesCreateManyAuthorInputEnvelope
    set?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    disconnect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    delete?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    connect?: ServicesWhereUniqueInput | ServicesWhereUniqueInput[]
    update?: ServicesUpdateWithWhereUniqueWithoutAuthorInput | ServicesUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ServicesUpdateManyWithWhereWithoutAuthorInput | ServicesUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ServicesScalarWhereInput | ServicesScalarWhereInput[]
  }

  export type BookingsCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingsCreateWithoutServiceInput, BookingsUncheckedCreateWithoutServiceInput> | BookingsCreateWithoutServiceInput[] | BookingsUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutServiceInput | BookingsCreateOrConnectWithoutServiceInput[]
    createMany?: BookingsCreateManyServiceInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutServicesInput = {
    create?: XOR<ProfileCreateWithoutServicesInput, ProfileUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutServicesInput
    connect?: ProfileWhereUniqueInput
  }

  export type BookingsUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingsCreateWithoutServiceInput, BookingsUncheckedCreateWithoutServiceInput> | BookingsCreateWithoutServiceInput[] | BookingsUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutServiceInput | BookingsCreateOrConnectWithoutServiceInput[]
    createMany?: BookingsCreateManyServiceInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingsUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingsCreateWithoutServiceInput, BookingsUncheckedCreateWithoutServiceInput> | BookingsCreateWithoutServiceInput[] | BookingsUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutServiceInput | BookingsCreateOrConnectWithoutServiceInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutServiceInput | BookingsUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingsCreateManyServiceInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutServiceInput | BookingsUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutServiceInput | BookingsUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type ProfileUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<ProfileCreateWithoutServicesInput, ProfileUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutServicesInput
    upsert?: ProfileUpsertWithoutServicesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutServicesInput, ProfileUpdateWithoutServicesInput>, ProfileUncheckedUpdateWithoutServicesInput>
  }

  export type BookingsUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingsCreateWithoutServiceInput, BookingsUncheckedCreateWithoutServiceInput> | BookingsCreateWithoutServiceInput[] | BookingsUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutServiceInput | BookingsCreateOrConnectWithoutServiceInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutServiceInput | BookingsUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingsCreateManyServiceInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutServiceInput | BookingsUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutServiceInput | BookingsUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ProfileCreateWithoutBookingsInput, ProfileUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutBookingsInput
    connect?: ProfileWhereUniqueInput
  }

  export type ServicesCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ServicesCreateWithoutBookingsInput, ServicesUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ServicesCreateOrConnectWithoutBookingsInput
    connect?: ServicesWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ProfileCreateWithoutBookingsInput, ProfileUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutBookingsInput
    upsert?: ProfileUpsertWithoutBookingsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutBookingsInput, ProfileUpdateWithoutBookingsInput>, ProfileUncheckedUpdateWithoutBookingsInput>
  }

  export type ServicesUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ServicesCreateWithoutBookingsInput, ServicesUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ServicesCreateOrConnectWithoutBookingsInput
    upsert?: ServicesUpsertWithoutBookingsInput
    connect?: ServicesWhereUniqueInput
    update?: XOR<XOR<ServicesUpdateToOneWithWhereWithoutBookingsInput, ServicesUpdateWithoutBookingsInput>, ServicesUncheckedUpdateWithoutBookingsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BookingsCreateWithoutAuthorInput = {
    id?: string
    bookingDate: Date | string
    timeSlot: string
    service: ServicesCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateWithoutAuthorInput = {
    id?: string
    serviceId: string
    bookingDate: Date | string
    timeSlot: string
  }

  export type BookingsCreateOrConnectWithoutAuthorInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutAuthorInput, BookingsUncheckedCreateWithoutAuthorInput>
  }

  export type BookingsCreateManyAuthorInputEnvelope = {
    data: BookingsCreateManyAuthorInput | BookingsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ServicesCreateWithoutAuthorInput = {
    id?: string
    title: string
    description: string
    category: string
    neighbour: string
    price: number
    bookings?: BookingsCreateNestedManyWithoutServiceInput
  }

  export type ServicesUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    description: string
    category: string
    neighbour: string
    price: number
    bookings?: BookingsUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServicesCreateOrConnectWithoutAuthorInput = {
    where: ServicesWhereUniqueInput
    create: XOR<ServicesCreateWithoutAuthorInput, ServicesUncheckedCreateWithoutAuthorInput>
  }

  export type ServicesCreateManyAuthorInputEnvelope = {
    data: ServicesCreateManyAuthorInput | ServicesCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type BookingsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutAuthorInput, BookingsUncheckedUpdateWithoutAuthorInput>
    create: XOR<BookingsCreateWithoutAuthorInput, BookingsUncheckedCreateWithoutAuthorInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutAuthorInput, BookingsUncheckedUpdateWithoutAuthorInput>
  }

  export type BookingsUpdateManyWithWhereWithoutAuthorInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BookingsScalarWhereInput = {
    AND?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
    OR?: BookingsScalarWhereInput[]
    NOT?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
    id?: UuidFilter<"Bookings"> | string
    serviceId?: UuidFilter<"Bookings"> | string
    bookingDate?: DateTimeFilter<"Bookings"> | Date | string
    timeSlot?: StringFilter<"Bookings"> | string
    authorId?: UuidFilter<"Bookings"> | string
  }

  export type ServicesUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ServicesWhereUniqueInput
    update: XOR<ServicesUpdateWithoutAuthorInput, ServicesUncheckedUpdateWithoutAuthorInput>
    create: XOR<ServicesCreateWithoutAuthorInput, ServicesUncheckedCreateWithoutAuthorInput>
  }

  export type ServicesUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ServicesWhereUniqueInput
    data: XOR<ServicesUpdateWithoutAuthorInput, ServicesUncheckedUpdateWithoutAuthorInput>
  }

  export type ServicesUpdateManyWithWhereWithoutAuthorInput = {
    where: ServicesScalarWhereInput
    data: XOR<ServicesUpdateManyMutationInput, ServicesUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ServicesScalarWhereInput = {
    AND?: ServicesScalarWhereInput | ServicesScalarWhereInput[]
    OR?: ServicesScalarWhereInput[]
    NOT?: ServicesScalarWhereInput | ServicesScalarWhereInput[]
    id?: UuidFilter<"Services"> | string
    title?: StringFilter<"Services"> | string
    description?: StringFilter<"Services"> | string
    category?: StringFilter<"Services"> | string
    neighbour?: StringFilter<"Services"> | string
    price?: IntFilter<"Services"> | number
    authorId?: UuidFilter<"Services"> | string
  }

  export type BookingsCreateWithoutServiceInput = {
    id?: string
    bookingDate: Date | string
    timeSlot: string
    author: ProfileCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateWithoutServiceInput = {
    id?: string
    bookingDate: Date | string
    timeSlot: string
    authorId: string
  }

  export type BookingsCreateOrConnectWithoutServiceInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutServiceInput, BookingsUncheckedCreateWithoutServiceInput>
  }

  export type BookingsCreateManyServiceInputEnvelope = {
    data: BookingsCreateManyServiceInput | BookingsCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutServicesInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    bookings?: BookingsCreateNestedManyWithoutAuthorInput
  }

  export type ProfileUncheckedCreateWithoutServicesInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    bookings?: BookingsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type ProfileCreateOrConnectWithoutServicesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutServicesInput, ProfileUncheckedCreateWithoutServicesInput>
  }

  export type BookingsUpsertWithWhereUniqueWithoutServiceInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutServiceInput, BookingsUncheckedUpdateWithoutServiceInput>
    create: XOR<BookingsCreateWithoutServiceInput, BookingsUncheckedCreateWithoutServiceInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutServiceInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutServiceInput, BookingsUncheckedUpdateWithoutServiceInput>
  }

  export type BookingsUpdateManyWithWhereWithoutServiceInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutServiceInput>
  }

  export type ProfileUpsertWithoutServicesInput = {
    update: XOR<ProfileUpdateWithoutServicesInput, ProfileUncheckedUpdateWithoutServicesInput>
    create: XOR<ProfileCreateWithoutServicesInput, ProfileUncheckedCreateWithoutServicesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutServicesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutServicesInput, ProfileUncheckedUpdateWithoutServicesInput>
  }

  export type ProfileUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingsUpdateManyWithoutAuthorNestedInput
  }

  export type ProfileUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ProfileCreateWithoutBookingsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    services?: ServicesCreateNestedManyWithoutAuthorInput
  }

  export type ProfileUncheckedCreateWithoutBookingsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    services?: ServicesUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type ProfileCreateOrConnectWithoutBookingsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutBookingsInput, ProfileUncheckedCreateWithoutBookingsInput>
  }

  export type ServicesCreateWithoutBookingsInput = {
    id?: string
    title: string
    description: string
    category: string
    neighbour: string
    price: number
    author: ProfileCreateNestedOneWithoutServicesInput
  }

  export type ServicesUncheckedCreateWithoutBookingsInput = {
    id?: string
    title: string
    description: string
    category: string
    neighbour: string
    price: number
    authorId: string
  }

  export type ServicesCreateOrConnectWithoutBookingsInput = {
    where: ServicesWhereUniqueInput
    create: XOR<ServicesCreateWithoutBookingsInput, ServicesUncheckedCreateWithoutBookingsInput>
  }

  export type ProfileUpsertWithoutBookingsInput = {
    update: XOR<ProfileUpdateWithoutBookingsInput, ProfileUncheckedUpdateWithoutBookingsInput>
    create: XOR<ProfileCreateWithoutBookingsInput, ProfileUncheckedCreateWithoutBookingsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutBookingsInput, ProfileUncheckedUpdateWithoutBookingsInput>
  }

  export type ProfileUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServicesUpdateManyWithoutAuthorNestedInput
  }

  export type ProfileUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServicesUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ServicesUpsertWithoutBookingsInput = {
    update: XOR<ServicesUpdateWithoutBookingsInput, ServicesUncheckedUpdateWithoutBookingsInput>
    create: XOR<ServicesCreateWithoutBookingsInput, ServicesUncheckedCreateWithoutBookingsInput>
    where?: ServicesWhereInput
  }

  export type ServicesUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ServicesWhereInput
    data: XOR<ServicesUpdateWithoutBookingsInput, ServicesUncheckedUpdateWithoutBookingsInput>
  }

  export type ServicesUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    neighbour?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    author?: ProfileUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServicesUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    neighbour?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingsCreateManyAuthorInput = {
    id?: string
    serviceId: string
    bookingDate: Date | string
    timeSlot: string
  }

  export type ServicesCreateManyAuthorInput = {
    id?: string
    title: string
    description: string
    category: string
    neighbour: string
    price: number
  }

  export type BookingsUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    service?: ServicesUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
  }

  export type BookingsUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
  }

  export type ServicesUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    neighbour?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    bookings?: BookingsUpdateManyWithoutServiceNestedInput
  }

  export type ServicesUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    neighbour?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    bookings?: BookingsUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServicesUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    neighbour?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type BookingsCreateManyServiceInput = {
    id?: string
    bookingDate: Date | string
    timeSlot: string
    authorId: string
  }

  export type BookingsUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    author?: ProfileUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingsUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}