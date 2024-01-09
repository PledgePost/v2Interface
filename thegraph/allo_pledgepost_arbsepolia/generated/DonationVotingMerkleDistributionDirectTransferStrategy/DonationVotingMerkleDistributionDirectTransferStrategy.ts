// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class Allocated extends ethereum.Event {
  get params(): Allocated__Params {
    return new Allocated__Params(this);
  }
}

export class Allocated__Params {
  _event: Allocated;

  constructor(event: Allocated) {
    this._event = event;
  }

  get recipientId(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class BatchPayoutSuccessful extends ethereum.Event {
  get params(): BatchPayoutSuccessful__Params {
    return new BatchPayoutSuccessful__Params(this);
  }
}

export class BatchPayoutSuccessful__Params {
  _event: BatchPayoutSuccessful;

  constructor(event: BatchPayoutSuccessful) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Distributed extends ethereum.Event {
  get params(): Distributed__Params {
    return new Distributed__Params(this);
  }
}

export class Distributed__Params {
  _event: Distributed;

  constructor(event: Distributed) {
    this._event = event;
  }

  get recipientId(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get recipientAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class DistributionUpdated extends ethereum.Event {
  get params(): DistributionUpdated__Params {
    return new DistributionUpdated__Params(this);
  }
}

export class DistributionUpdated__Params {
  _event: DistributionUpdated;

  constructor(event: DistributionUpdated) {
    this._event = event;
  }

  get merkleRoot(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get metadata(): DistributionUpdatedMetadataStruct {
    return changetype<DistributionUpdatedMetadataStruct>(
      this._event.parameters[1].value.toTuple(),
    );
  }
}

export class DistributionUpdatedMetadataStruct extends ethereum.Tuple {
  get protocol(): BigInt {
    return this[0].toBigInt();
  }

  get pointer(): string {
    return this[1].toString();
  }
}

export class FundsDistributed extends ethereum.Event {
  get params(): FundsDistributed__Params {
    return new FundsDistributed__Params(this);
  }
}

export class FundsDistributed__Params {
  _event: FundsDistributed;

  constructor(event: FundsDistributed) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get grantee(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get recipientId(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get poolId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get data(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class PoolActive extends ethereum.Event {
  get params(): PoolActive__Params {
    return new PoolActive__Params(this);
  }
}

export class PoolActive__Params {
  _event: PoolActive;

  constructor(event: PoolActive) {
    this._event = event;
  }

  get active(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class RecipientStatusUpdated extends ethereum.Event {
  get params(): RecipientStatusUpdated__Params {
    return new RecipientStatusUpdated__Params(this);
  }
}

export class RecipientStatusUpdated__Params {
  _event: RecipientStatusUpdated;

  constructor(event: RecipientStatusUpdated) {
    this._event = event;
  }

  get rowIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get fullRow(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Registered extends ethereum.Event {
  get params(): Registered__Params {
    return new Registered__Params(this);
  }
}

export class Registered__Params {
  _event: Registered;

  constructor(event: Registered) {
    this._event = event;
  }

  get recipientId(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get data(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class TimestampsUpdated extends ethereum.Event {
  get params(): TimestampsUpdated__Params {
    return new TimestampsUpdated__Params(this);
  }
}

export class TimestampsUpdated__Params {
  _event: TimestampsUpdated;

  constructor(event: TimestampsUpdated) {
    this._event = event;
  }

  get registrationStartTime(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get registrationEndTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get allocationStartTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get allocationEndTime(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class UpdatedRegistration extends ethereum.Event {
  get params(): UpdatedRegistration__Params {
    return new UpdatedRegistration__Params(this);
  }
}

export class UpdatedRegistration__Params {
  _event: UpdatedRegistration;

  constructor(event: UpdatedRegistration) {
    this._event = event;
  }

  get recipientId(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get data(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get status(): i32 {
    return this._event.parameters[3].value.toI32();
  }
}

export class DonationVotingMerkleDistributionDirectTransferStrategy__distributionMetadataResult {
  value0: BigInt;
  value1: string;

  constructor(value0: BigInt, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    return map;
  }

  getProtocol(): BigInt {
    return this.value0;
  }

  getPointer(): string {
    return this.value1;
  }
}

export class DonationVotingMerkleDistributionDirectTransferStrategy__getPayoutsResultValue0Struct extends ethereum.Tuple {
  get recipientAddress(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }
}

export class DonationVotingMerkleDistributionDirectTransferStrategy__getRecipientResultRecipientStruct extends ethereum.Tuple {
  get useRegistryAnchor(): boolean {
    return this[0].toBoolean();
  }

  get recipientAddress(): Address {
    return this[1].toAddress();
  }

  get metadata(): DonationVotingMerkleDistributionDirectTransferStrategy__getRecipientResultRecipientMetadataStruct {
    return changetype<DonationVotingMerkleDistributionDirectTransferStrategy__getRecipientResultRecipientMetadataStruct>(
      this[2].toTuple(),
    );
  }
}

export class DonationVotingMerkleDistributionDirectTransferStrategy__getRecipientResultRecipientMetadataStruct extends ethereum.Tuple {
  get protocol(): BigInt {
    return this[0].toBigInt();
  }

  get pointer(): string {
    return this[1].toString();
  }
}

export class DonationVotingMerkleDistributionDirectTransferStrategy extends ethereum.SmartContract {
  static bind(
    address: Address,
  ): DonationVotingMerkleDistributionDirectTransferStrategy {
    return new DonationVotingMerkleDistributionDirectTransferStrategy(
      "DonationVotingMerkleDistributionDirectTransferStrategy",
      address,
    );
  }

  NATIVE(): Address {
    let result = super.call("NATIVE", "NATIVE():(address)", []);

    return result[0].toAddress();
  }

  try_NATIVE(): ethereum.CallResult<Address> {
    let result = super.tryCall("NATIVE", "NATIVE():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  PERMIT2(): Address {
    let result = super.call("PERMIT2", "PERMIT2():(address)", []);

    return result[0].toAddress();
  }

  try_PERMIT2(): ethereum.CallResult<Address> {
    let result = super.tryCall("PERMIT2", "PERMIT2():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allocationEndTime(): BigInt {
    let result = super.call(
      "allocationEndTime",
      "allocationEndTime():(uint64)",
      [],
    );

    return result[0].toBigInt();
  }

  try_allocationEndTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allocationEndTime",
      "allocationEndTime():(uint64)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allocationStartTime(): BigInt {
    let result = super.call(
      "allocationStartTime",
      "allocationStartTime():(uint64)",
      [],
    );

    return result[0].toBigInt();
  }

  try_allocationStartTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allocationStartTime",
      "allocationStartTime():(uint64)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowedTokens(param0: Address): boolean {
    let result = super.call("allowedTokens", "allowedTokens(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toBoolean();
  }

  try_allowedTokens(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "allowedTokens",
      "allowedTokens(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  distributionMetadata(): DonationVotingMerkleDistributionDirectTransferStrategy__distributionMetadataResult {
    let result = super.call(
      "distributionMetadata",
      "distributionMetadata():(uint256,string)",
      [],
    );

    return new DonationVotingMerkleDistributionDirectTransferStrategy__distributionMetadataResult(
      result[0].toBigInt(),
      result[1].toString(),
    );
  }

  try_distributionMetadata(): ethereum.CallResult<DonationVotingMerkleDistributionDirectTransferStrategy__distributionMetadataResult> {
    let result = super.tryCall(
      "distributionMetadata",
      "distributionMetadata():(uint256,string)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DonationVotingMerkleDistributionDirectTransferStrategy__distributionMetadataResult(
        value[0].toBigInt(),
        value[1].toString(),
      ),
    );
  }

  distributionStarted(): boolean {
    let result = super.call(
      "distributionStarted",
      "distributionStarted():(bool)",
      [],
    );

    return result[0].toBoolean();
  }

  try_distributionStarted(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "distributionStarted",
      "distributionStarted():(bool)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getAllo(): Address {
    let result = super.call("getAllo", "getAllo():(address)", []);

    return result[0].toAddress();
  }

  try_getAllo(): ethereum.CallResult<Address> {
    let result = super.tryCall("getAllo", "getAllo():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPayouts(
    _recipientIds: Array<Address>,
    _data: Array<Bytes>,
  ): Array<DonationVotingMerkleDistributionDirectTransferStrategy__getPayoutsResultValue0Struct> {
    let result = super.call(
      "getPayouts",
      "getPayouts(address[],bytes[]):((address,uint256)[])",
      [
        ethereum.Value.fromAddressArray(_recipientIds),
        ethereum.Value.fromBytesArray(_data),
      ],
    );

    return result[0].toTupleArray<DonationVotingMerkleDistributionDirectTransferStrategy__getPayoutsResultValue0Struct>();
  }

  try_getPayouts(
    _recipientIds: Array<Address>,
    _data: Array<Bytes>,
  ): ethereum.CallResult<
    Array<DonationVotingMerkleDistributionDirectTransferStrategy__getPayoutsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getPayouts",
      "getPayouts(address[],bytes[]):((address,uint256)[])",
      [
        ethereum.Value.fromAddressArray(_recipientIds),
        ethereum.Value.fromBytesArray(_data),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<DonationVotingMerkleDistributionDirectTransferStrategy__getPayoutsResultValue0Struct>(),
    );
  }

  getPoolAmount(): BigInt {
    let result = super.call("getPoolAmount", "getPoolAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getPoolAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPoolAmount",
      "getPoolAmount():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPoolId(): BigInt {
    let result = super.call("getPoolId", "getPoolId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getPoolId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getPoolId", "getPoolId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRecipient(
    _recipientId: Address,
  ): DonationVotingMerkleDistributionDirectTransferStrategy__getRecipientResultRecipientStruct {
    let result = super.call(
      "getRecipient",
      "getRecipient(address):((bool,address,(uint256,string)))",
      [ethereum.Value.fromAddress(_recipientId)],
    );

    return changetype<DonationVotingMerkleDistributionDirectTransferStrategy__getRecipientResultRecipientStruct>(
      result[0].toTuple(),
    );
  }

  try_getRecipient(
    _recipientId: Address,
  ): ethereum.CallResult<DonationVotingMerkleDistributionDirectTransferStrategy__getRecipientResultRecipientStruct> {
    let result = super.tryCall(
      "getRecipient",
      "getRecipient(address):((bool,address,(uint256,string)))",
      [ethereum.Value.fromAddress(_recipientId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<DonationVotingMerkleDistributionDirectTransferStrategy__getRecipientResultRecipientStruct>(
        value[0].toTuple(),
      ),
    );
  }

  getRecipientStatus(_recipientId: Address): i32 {
    let result = super.call(
      "getRecipientStatus",
      "getRecipientStatus(address):(uint8)",
      [ethereum.Value.fromAddress(_recipientId)],
    );

    return result[0].toI32();
  }

  try_getRecipientStatus(_recipientId: Address): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getRecipientStatus",
      "getRecipientStatus(address):(uint8)",
      [ethereum.Value.fromAddress(_recipientId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getStrategyId(): Bytes {
    let result = super.call("getStrategyId", "getStrategyId():(bytes32)", []);

    return result[0].toBytes();
  }

  try_getStrategyId(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getStrategyId",
      "getStrategyId():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasBeenDistributed(_index: BigInt): boolean {
    let result = super.call(
      "hasBeenDistributed",
      "hasBeenDistributed(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_index)],
    );

    return result[0].toBoolean();
  }

  try_hasBeenDistributed(_index: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "hasBeenDistributed",
      "hasBeenDistributed(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_index)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isDistributionSet(): boolean {
    let result = super.call(
      "isDistributionSet",
      "isDistributionSet():(bool)",
      [],
    );

    return result[0].toBoolean();
  }

  try_isDistributionSet(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isDistributionSet",
      "isDistributionSet():(bool)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isPoolActive(): boolean {
    let result = super.call("isPoolActive", "isPoolActive():(bool)", []);

    return result[0].toBoolean();
  }

  try_isPoolActive(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPoolActive", "isPoolActive():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isValidAllocator(_allocator: Address): boolean {
    let result = super.call(
      "isValidAllocator",
      "isValidAllocator(address):(bool)",
      [ethereum.Value.fromAddress(_allocator)],
    );

    return result[0].toBoolean();
  }

  try_isValidAllocator(_allocator: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isValidAllocator",
      "isValidAllocator(address):(bool)",
      [ethereum.Value.fromAddress(_allocator)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  merkleRoot(): Bytes {
    let result = super.call("merkleRoot", "merkleRoot():(bytes32)", []);

    return result[0].toBytes();
  }

  try_merkleRoot(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("merkleRoot", "merkleRoot():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  metadataRequired(): boolean {
    let result = super.call(
      "metadataRequired",
      "metadataRequired():(bool)",
      [],
    );

    return result[0].toBoolean();
  }

  try_metadataRequired(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "metadataRequired",
      "metadataRequired():(bool)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  multicall(data: Array<Bytes>): Array<Bytes> {
    let result = super.call("multicall", "multicall(bytes[]):(bytes[])", [
      ethereum.Value.fromBytesArray(data),
    ]);

    return result[0].toBytesArray();
  }

  try_multicall(data: Array<Bytes>): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall("multicall", "multicall(bytes[]):(bytes[])", [
      ethereum.Value.fromBytesArray(data),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  recipientToStatusIndexes(param0: Address): BigInt {
    let result = super.call(
      "recipientToStatusIndexes",
      "recipientToStatusIndexes(address):(uint256)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toBigInt();
  }

  try_recipientToStatusIndexes(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "recipientToStatusIndexes",
      "recipientToStatusIndexes(address):(uint256)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  recipientsCounter(): BigInt {
    let result = super.call(
      "recipientsCounter",
      "recipientsCounter():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_recipientsCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "recipientsCounter",
      "recipientsCounter():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  registrationEndTime(): BigInt {
    let result = super.call(
      "registrationEndTime",
      "registrationEndTime():(uint64)",
      [],
    );

    return result[0].toBigInt();
  }

  try_registrationEndTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "registrationEndTime",
      "registrationEndTime():(uint64)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  registrationStartTime(): BigInt {
    let result = super.call(
      "registrationStartTime",
      "registrationStartTime():(uint64)",
      [],
    );

    return result[0].toBigInt();
  }

  try_registrationStartTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "registrationStartTime",
      "registrationStartTime():(uint64)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  statusesBitMap(param0: BigInt): BigInt {
    let result = super.call(
      "statusesBitMap",
      "statusesBitMap(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return result[0].toBigInt();
  }

  try_statusesBitMap(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "statusesBitMap",
      "statusesBitMap(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalPayoutAmount(): BigInt {
    let result = super.call(
      "totalPayoutAmount",
      "totalPayoutAmount():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_totalPayoutAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalPayoutAmount",
      "totalPayoutAmount():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  useRegistryAnchor(): boolean {
    let result = super.call(
      "useRegistryAnchor",
      "useRegistryAnchor():(bool)",
      [],
    );

    return result[0].toBoolean();
  }

  try_useRegistryAnchor(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "useRegistryAnchor",
      "useRegistryAnchor():(bool)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _allo(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _permit2(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AllocateCall extends ethereum.Call {
  get inputs(): AllocateCall__Inputs {
    return new AllocateCall__Inputs(this);
  }

  get outputs(): AllocateCall__Outputs {
    return new AllocateCall__Outputs(this);
  }
}

export class AllocateCall__Inputs {
  _call: AllocateCall;

  constructor(call: AllocateCall) {
    this._call = call;
  }

  get _data(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _sender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AllocateCall__Outputs {
  _call: AllocateCall;

  constructor(call: AllocateCall) {
    this._call = call;
  }
}

export class DistributeCall extends ethereum.Call {
  get inputs(): DistributeCall__Inputs {
    return new DistributeCall__Inputs(this);
  }

  get outputs(): DistributeCall__Outputs {
    return new DistributeCall__Outputs(this);
  }
}

export class DistributeCall__Inputs {
  _call: DistributeCall;

  constructor(call: DistributeCall) {
    this._call = call;
  }

  get _recipientIds(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _sender(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class DistributeCall__Outputs {
  _call: DistributeCall;

  constructor(call: DistributeCall) {
    this._call = call;
  }
}

export class IncreasePoolAmountCall extends ethereum.Call {
  get inputs(): IncreasePoolAmountCall__Inputs {
    return new IncreasePoolAmountCall__Inputs(this);
  }

  get outputs(): IncreasePoolAmountCall__Outputs {
    return new IncreasePoolAmountCall__Outputs(this);
  }
}

export class IncreasePoolAmountCall__Inputs {
  _call: IncreasePoolAmountCall;

  constructor(call: IncreasePoolAmountCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class IncreasePoolAmountCall__Outputs {
  _call: IncreasePoolAmountCall;

  constructor(call: IncreasePoolAmountCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _poolId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MulticallCall extends ethereum.Call {
  get inputs(): MulticallCall__Inputs {
    return new MulticallCall__Inputs(this);
  }

  get outputs(): MulticallCall__Outputs {
    return new MulticallCall__Outputs(this);
  }
}

export class MulticallCall__Inputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get data(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }
}

export class MulticallCall__Outputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get results(): Array<Bytes> {
    return this._call.outputValues[0].value.toBytesArray();
  }
}

export class RegisterRecipientCall extends ethereum.Call {
  get inputs(): RegisterRecipientCall__Inputs {
    return new RegisterRecipientCall__Inputs(this);
  }

  get outputs(): RegisterRecipientCall__Outputs {
    return new RegisterRecipientCall__Outputs(this);
  }
}

export class RegisterRecipientCall__Inputs {
  _call: RegisterRecipientCall;

  constructor(call: RegisterRecipientCall) {
    this._call = call;
  }

  get _data(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _sender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RegisterRecipientCall__Outputs {
  _call: RegisterRecipientCall;

  constructor(call: RegisterRecipientCall) {
    this._call = call;
  }

  get recipientId(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class ReviewRecipientsCall extends ethereum.Call {
  get inputs(): ReviewRecipientsCall__Inputs {
    return new ReviewRecipientsCall__Inputs(this);
  }

  get outputs(): ReviewRecipientsCall__Outputs {
    return new ReviewRecipientsCall__Outputs(this);
  }
}

export class ReviewRecipientsCall__Inputs {
  _call: ReviewRecipientsCall;

  constructor(call: ReviewRecipientsCall) {
    this._call = call;
  }

  get statuses(): Array<ReviewRecipientsCallStatusesStruct> {
    return this._call.inputValues[0].value.toTupleArray<ReviewRecipientsCallStatusesStruct>();
  }

  get refRecipientsCounter(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ReviewRecipientsCall__Outputs {
  _call: ReviewRecipientsCall;

  constructor(call: ReviewRecipientsCall) {
    this._call = call;
  }
}

export class ReviewRecipientsCallStatusesStruct extends ethereum.Tuple {
  get index(): BigInt {
    return this[0].toBigInt();
  }

  get statusRow(): BigInt {
    return this[1].toBigInt();
  }
}

export class UpdateDistributionCall extends ethereum.Call {
  get inputs(): UpdateDistributionCall__Inputs {
    return new UpdateDistributionCall__Inputs(this);
  }

  get outputs(): UpdateDistributionCall__Outputs {
    return new UpdateDistributionCall__Outputs(this);
  }
}

export class UpdateDistributionCall__Inputs {
  _call: UpdateDistributionCall;

  constructor(call: UpdateDistributionCall) {
    this._call = call;
  }

  get _merkleRoot(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _distributionMetadata(): UpdateDistributionCall_distributionMetadataStruct {
    return changetype<UpdateDistributionCall_distributionMetadataStruct>(
      this._call.inputValues[1].value.toTuple(),
    );
  }
}

export class UpdateDistributionCall__Outputs {
  _call: UpdateDistributionCall;

  constructor(call: UpdateDistributionCall) {
    this._call = call;
  }
}

export class UpdateDistributionCall_distributionMetadataStruct extends ethereum.Tuple {
  get protocol(): BigInt {
    return this[0].toBigInt();
  }

  get pointer(): string {
    return this[1].toString();
  }
}

export class UpdatePoolTimestampsCall extends ethereum.Call {
  get inputs(): UpdatePoolTimestampsCall__Inputs {
    return new UpdatePoolTimestampsCall__Inputs(this);
  }

  get outputs(): UpdatePoolTimestampsCall__Outputs {
    return new UpdatePoolTimestampsCall__Outputs(this);
  }
}

export class UpdatePoolTimestampsCall__Inputs {
  _call: UpdatePoolTimestampsCall;

  constructor(call: UpdatePoolTimestampsCall) {
    this._call = call;
  }

  get _registrationStartTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _registrationEndTime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _allocationStartTime(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _allocationEndTime(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class UpdatePoolTimestampsCall__Outputs {
  _call: UpdatePoolTimestampsCall;

  constructor(call: UpdatePoolTimestampsCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}