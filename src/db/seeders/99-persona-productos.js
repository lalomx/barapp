'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PersonaProductos', [{
      id: '2f5aa2e0-3aca-40fb-bfc2-31ad986aae1b',
      personaId: '3ea56b03-6271-4716-8b22-7369ab6da5bd',
      productoId: '8ba4d9f3-0d47-4d3a-8a7a-411eb0f7c235', // comanda a74be3c5-a6d5-4729-85f4-9dbefc90aa96
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: '57d31938-82b6-4313-932d-68788bb9ffb2',
      personaId: '3ea56b03-6271-4716-8b22-7369ab6da5bd',
      productoId: '8ba4d9f3-0d47-4d3a-8a7a-411eb0f7c235', // comanda a74be3c5-a6d5-4729-85f4-9dbefc90aa96
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 'cd885632-f4dd-46c5-893e-f9993fbf18e4',
      personaId: '13d4bfe4-33cd-434d-b9b1-6d3745f416e2',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 57d31938-82b6-4313-932d-68788bb9ffb2
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: '406af490-4c26-4899-a0f2-8d1c4d19af82',
      personaId: '13d4bfe4-33cd-434d-b9b1-6d3745f416e2',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 57d31938-82b6-4313-932d-68788bb9ffb2
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: '57170a3f-3cb3-4ee4-a6a4-52d8737d8900',
      personaId: '13d4bfe4-33cd-434d-b9b1-6d3745f416e2',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 57d31938-82b6-4313-932d-68788bb9ffb2
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: '355caf22-2ae9-4d27-bd77-4cd94e88d9ce',
      personaId: '13d4bfe4-33cd-434d-b9b1-6d3745f416e2',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 57d31938-82b6-4313-932d-68788bb9ffb2
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: '9ae2796f-128e-4b53-aad7-899208e75b98',
      personaId: '13d4bfe4-33cd-434d-b9b1-6d3745f416e2',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 57d31938-82b6-4313-932d-68788bb9ffb2
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    { 
      id: '5a6bf9af-7e95-4682-bc6e-ac0c450b9ee7',
      personaId: 'fefb8f47-ec06-4bed-af81-cce0e18b4631',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 57d31938-82b6-4313-932d-68788bb9ffb2
      createdAt: new Date(),
      updatedAt: new Date()
    }, { 
      id: '513cbfc2-67de-4d70-b05b-06fdae1d066b',
      personaId: 'fefb8f47-ec06-4bed-af81-cce0e18b4631',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 57d31938-82b6-4313-932d-68788bb9ffb2
      createdAt: new Date(),
      updatedAt: new Date()
    }, { 
      id: 'da55d10b-8378-4539-a916-26a3036428cb',
      personaId: 'fefb8f47-ec06-4bed-af81-cce0e18b4631',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 57d31938-82b6-4313-932d-68788bb9ffb2
      createdAt: new Date(),
      updatedAt: new Date()
    }, { 
      id: '61057ee4-45de-4689-bb57-daa217ed33b0',
      personaId: 'fefb8f47-ec06-4bed-af81-cce0e18b4631',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 57d31938-82b6-4313-932d-68788bb9ffb2
      createdAt: new Date(),
      updatedAt: new Date()
    }, { 
      id: '2522bdbc-675d-4a0e-997a-21d8e52bd9e6',
      personaId: 'fefb8f47-ec06-4bed-af81-cce0e18b4631',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 57d31938-82b6-4313-932d-68788bb9ffb2
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: '81b93744-5363-4982-af03-c3250ef134c6',
      personaId: '43eacc0c-393f-4980-9df7-a4df563a2bd5',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 57d31938-82b6-4313-932d-68788bb9ffb2
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 'e53ed0ed-f0d5-4d34-b195-5ab55363b8d5',
      personaId: '43eacc0c-393f-4980-9df7-a4df563a2bd5',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 57d31938-82b6-4313-932d-68788bb9ffb2
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 'c8483d4a-9926-41b7-95fd-665831134ea4',
      personaId: '43eacc0c-393f-4980-9df7-a4df563a2bd5',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 57d31938-82b6-4313-932d-68788bb9ffb2
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 'b8d95008-8869-4649-9447-6b4b2c4feb18',
      personaId: '43eacc0c-393f-4980-9df7-a4df563a2bd5',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 57d31938-82b6-4313-932d-68788bb9ffb2
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 'd7dc863e-501f-4050-a26f-f42bf167610b',
      personaId: '43eacc0c-393f-4980-9df7-a4df563a2bd5',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 57d31938-82b6-4313-932d-68788bb9ffb2
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 'afcdb297-5669-44c7-87a5-01137cd5e365',
      personaId: '39d5cc07-dbd5-4878-8a9a-3378a1b21309',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda f6091fda-de32-438a-80d5-be096c1c32c7
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'c1b0a981-d64f-47d8-ac17-8f8050d97b27',
      personaId: 'b84c2e2c-7827-46e0-9b4d-6998c6ded07c',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda f6091fda-de32-438a-80d5-be096c1c32c7
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '0094ef3e-1a0a-48a0-82a0-d6397eea8115',
      personaId: '7c9ce25c-5f97-4604-897e-b06cc2e594aa',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda f6091fda-de32-438a-80d5-be096c1c32c7
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '30829ed3-a5cb-4d99-9179-9b43bf23ca00',
      personaId: '7719373f-511d-4b71-b16e-f189d4c535ee',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda f6091fda-de32-438a-80d5-be096c1c32c7
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '6ae9eaa7-31ae-4473-9f60-3ba71c4e04f5',
      personaId: 'bd4097a3-2c31-4bd3-80c0-1e39b027d7d2',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda f6091fda-de32-438a-80d5-be096c1c32c7
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'f7c61561-2771-4733-a531-4ebf86293e95',
      personaId: 'aff4fe18-0fff-483d-b813-34489634dd6f',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 0607c2b0-76ce-467b-8062-8fc18eac983b
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: '7894ded0-2343-49eb-bff1-8ec36a9eab5a',
      personaId: 'aff4fe18-0fff-483d-b813-34489634dd6f',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 0607c2b0-76ce-467b-8062-8fc18eac983b
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 'dd91c2b3-31ac-451c-96ab-ee01030eaaee',
      personaId: 'aff4fe18-0fff-483d-b813-34489634dd6f',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 0607c2b0-76ce-467b-8062-8fc18eac983b
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 'e9a08167-acad-4544-8183-b5abe62a38e2',
      personaId: 'aff4fe18-0fff-483d-b813-34489634dd6f',
      productoId: '8ba4d9f3-0d47-4d3a-8a7a-411eb0f7c235', // comanda 0607c2b0-76ce-467b-8062-8fc18eac983b
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 'c0c6dea1-fca7-40fa-a583-59254047d312',
      personaId: 'aff4fe18-0fff-483d-b813-34489634dd6f',
      productoId: '8ba4d9f3-0d47-4d3a-8a7a-411eb0f7c235', // comanda 0607c2b0-76ce-467b-8062-8fc18eac983b
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: '1e33f801-bfc3-42fe-bd60-612c6345ebb1',
      personaId: '4e86790c-816f-4b67-918e-7cccfa11f2c9',
      productoId: '8ba4d9f3-0d47-4d3a-8a7a-411eb0f7c235', // comanda 9e0ffb37-dd02-4f2e-9ce3-081336662d4e
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '10bfafef-afd3-49a3-8206-a1e55e6c0977',
      personaId: '4e86790c-816f-4b67-918e-7cccfa11f2c9',
      productoId: '8ba4d9f3-0d47-4d3a-8a7a-411eb0f7c235', // comanda 9e0ffb37-dd02-4f2e-9ce3-081336662d4e
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '7d6f7d15-b779-44ae-a862-e15ae465139b',
      personaId: '4e86790c-816f-4b67-918e-7cccfa11f2c9',
      productoId: '8ba4d9f3-0d47-4d3a-8a7a-411eb0f7c235', // comanda 9e0ffb37-dd02-4f2e-9ce3-081336662d4e
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '5f503790-1f1b-44ad-adb6-5f071944ca4a',
      personaId: '4e86790c-816f-4b67-918e-7cccfa11f2c9',
      productoId: '8ba4d9f3-0d47-4d3a-8a7a-411eb0f7c235', // comanda 9e0ffb37-dd02-4f2e-9ce3-081336662d4e
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '57d47255-0bcf-4ab7-8c7a-1d27bda4f0dd',
      personaId: '4e86790c-816f-4b67-918e-7cccfa11f2c9',
      productoId: '8ba4d9f3-0d47-4d3a-8a7a-411eb0f7c235', // comanda 9e0ffb37-dd02-4f2e-9ce3-081336662d4e
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '00cff058-922e-4a1b-bc90-3a47167d911d',
      personaId: '6d5bf8e0-13e2-41dc-be9b-a9c14493468a',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 9e0ffb37-dd02-4f2e-9ce3-081336662d4e
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: '41bf2316-3e12-4a17-bf0d-9f0009fe35bf',
      personaId: '6d5bf8e0-13e2-41dc-be9b-a9c14493468a',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 9e0ffb37-dd02-4f2e-9ce3-081336662d4e
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 'df892f9a-7b78-4b83-b631-421a2f8a6d5b',
      personaId: '6d5bf8e0-13e2-41dc-be9b-a9c14493468a',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 9e0ffb37-dd02-4f2e-9ce3-081336662d4e
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 'b05b5963-4e71-442f-8312-681388ac34da',
      personaId: '6d5bf8e0-13e2-41dc-be9b-a9c14493468a',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 9e0ffb37-dd02-4f2e-9ce3-081336662d4e
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 'c10e00cd-03e7-4c7b-84bb-8630b5f7fe24',
      personaId: '6d5bf8e0-13e2-41dc-be9b-a9c14493468a',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69', // comanda 9e0ffb37-dd02-4f2e-9ce3-081336662d4e
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PersonaProductos', null, {});
  }
};
