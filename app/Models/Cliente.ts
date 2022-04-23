import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public prontuario: number

  @column()
  public nome: string

  @column()
  public nascimento: string

  @column()
  public admissao: string

  @column()
  public recisao: string

  @column()
  public cpf: number

  @column()
  public categoria: string

  @column()
  public banco: number

  @column()
  public agencia: number

  @column()
  public conta: number

  @column()
  public cargo: string

  @column()
  public funcao: string

  @column()
  public rg: number

  @column()
  public org_rg: string

  @column()
  public uf_rg: string

  @column()
  public pis: number

  @column()
  public pasep: number

  @column()
  public endereco: string

  @column()
  public num_end: number

  @column()
  public comp_end: string

  @column()
  public bairro: string

  @column()
  public cep: number

  @column()
  public cidade: string

  @column()
  public uf: string

  @column()
  public est_civil: string

  @column()
  public sexo: string

  @column()
  public data_aposentadoria: string

  @column()
  public pai: string

  @column()
  public mae: string

  @column()
  public telefone: number

  @column()
  public celular: number

  @column()
  public email: string

  @column()
  public numero_pasta: number

  @column()
  public duplicada: string

  @column()
  public links: string

  @column()
  public obs: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
