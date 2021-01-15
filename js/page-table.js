const pageTable = {
    props: {
        tableheads: Array,
        tableheadBackground: String,
    },
    template: `
          <table class="table table-borderless table-hover table-responsive-sm table-striped">
              <thead :style="{ 'background-color': tableheadBackground }">
                  <tr>
                      <th
                        v-for="(tablehead, index) of tableheads"
                        :key="tablehead"
                        scope="col"
                        class="text-capitalize"
                      >{{tablehead}}
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <slot></slot>
              </tbody>
          </table>
    `,
};

export default pageTable;
