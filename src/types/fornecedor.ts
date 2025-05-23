export type FornecedorType = {
  fornecedor_id: number;
  dsc_razao_social: string;
  dsc_nome_fantasia: string;
};

export type FornecedorPayloadType = Pick<
  FornecedorType,
  'dsc_razao_social' | 'dsc_nome_fantasia'
>;

export type ModalBuscaFornecedorPropsType = {
  open: boolean;
  onClose: (open: boolean) => void;
  onSelect: (fornecedor: FornecedorType) => void;
};