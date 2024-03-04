function LinkedList() {
  // Inicialização da lista com cabeça e comprimento
  let head = null; // Inicialmente a lista está vazia
  let length = 0; // O comprimento atual da lista

  // Função para criar um novo nó na lista
  const newNode = (value) => {
    return {
      value,
      next: null, // O próximo nó é inicializado como nulo
    };
  };

  // Função para adicionar um novo valor à lista
  const add = (value) => {
    if (!head) {
      // Se a lista estiver vazia, o novo nó se torna a cabeça da lista
      head = newNode(value);
      length++;
      return head;
    }
    // Caso contrário, percorremos a lista até o último nó e adicionamos o novo nó lá
    let node = head;
    while (node.next) {
      node = node.next;
    }
    node.next = newNode(value);
    length++;
    return node.next;
  };

  // Função para obter um nó na lista com base no índice
  const getByIndex = (index) => {
    if (length === 0 || index >= length) {
      return null; // Se a lista estiver vazia ou o índice for maior que o comprimento, retornamos nulo
    }
    let node = head;
    let count = 0;
    while (count < index && node.next) {
      node = node.next;
      count++;
    }
    return node; // Retornamos o nó na posição do índice fornecido
  };

  // Função para obter um nó na lista com base em seu valor
  const getByValue = (value) => {
    if (length === 0) {
      return null; // Se a lista estiver vazia, não há nenhum valor para procurar
    }
    let node = head;
    if (node.value === value) {
      return node; // Se o valor estiver na cabeça, retornamos imediatamente
    }
    while (node.next) {
      node = node.next;
      if (node.value === value) {
        return node; // Se o valor estiver em algum lugar na lista, retornamos o nó correspondente
      }
    }
    return null; // Se o valor não for encontrado na lista, retornamos nulo
  };

  // Função para remover um nó específico da lista
  const remove = (node) => {
    if (length === 0) {
      return false; // Se a lista estiver vazia, não há nada para remover
    }
    if (node === head) {
      head = node.next; // Se o nó a ser removido for a cabeça, atualizamos a cabeça
      return true;
    }
    let currentNode = head;
    if (currentNode.next && currentNode.next !== node) {
      currentNode = currentNode.next;
    }
    currentNode.next = node.next; // Removemos o nó atualizando os ponteiros
    return true;
  };

  // Retorna um objeto contendo métodos públicos para interagir com a lista
  return {
    length: () => length,
    add: (value) => add(value),
    print: () => console.log(head),
    getByIndex: (index) => getByIndex(index),
    getByValue: (value) => getByValue(value),
    remove: (node) => remove(node),
  };
}

// Criando uma lista encadeada
const list = LinkedList();
// Adicionando elementos à lista
list.add(7);
list.add(8);
list.add(9);
list.add(10);
// Obtendo o nó com o valor 9
let node = list.getByValue(9);
// Exibindo a lista antes da remoção
list.print();
// Removendo o nó com o valor 9
list.remove(node);
// Exibindo a lista após a remoção
list.print();
