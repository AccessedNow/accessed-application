import { motion } from 'framer-motion';
import FuseUtils from '@fuse/utils';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useMemo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactsMultiSelectMenu from './ContactsMultiSelectMenu';
import ContactsTable from './ContactsTable';
import {
  openCardDialog
} from '../../store/cardSlice';

function ContactsList(props) {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const searchText = useSelector(({ contactsApp }) => contactsApp.contacts.searchText);
  // const user = useSelector(({ contactsApp }) => contactsApp.user);

  const contacts = useState([
    {
      id: '5725a680b3249760ea21de52',
      name: 'Abbott',
      lastName: 'Keitch',
      avatar: 'assets/images/avatars/Abbott.jpg',
      nickname: 'Royalguard',
      company: 'Saois',
      jobTitle: 'Digital Archivist',
      email: 'abbott@withinpixels.com',
      phone: '+1-202-555-0175',
      address: '933 8th Street Stamford, CT 06902',
      birthday: undefined,
      notes: ''
    },
    {
      id: '5725a680606588342058356d',
      name: 'Arnold',
      lastName: 'Matlock',
      avatar: 'assets/images/avatars/Arnold.jpg',
      nickname: 'Wanderer',
      company: 'Laotcone',
      jobTitle: 'Graphic Artist',
      email: 'arnold@withinpixels.com',
      phone: '+1-202-555-0141',
      address: '906 Valley Road Michigan City, IN 46360',
      birthday: undefined,
      notes: ''
    },
    {
      id: '5725a68009e20d0a9e9acf2a',
      name: 'Barrera',
      lastName: 'Bradbury',
      avatar: 'assets/images/avatars/Barrera.jpg',
      nickname: 'Jackal',
      company: 'Unizim',
      jobTitle: 'Graphic Designer',
      email: 'barrera@withinpixels.com',
      phone: '+1-202-555-0196',
      address: '183 River Street Passaic, NJ 07055',
      birthday: undefined,
      notes: ''
    }]);
  const searchText = useState('');
  const user = useState({starred: []});


  const [filteredData, setFilteredData] = useState(null);

  const columns = useMemo(
    () => [
      {
        Header: ({ selectedFlatRows }) => {
          const selectedRowIds = selectedFlatRows.map((row) => row.original.id);

          return (
            selectedFlatRows.length > 0 && (
              <ContactsMultiSelectMenu selectedContactIds={selectedRowIds} />
            )
          );
        },
        accessor: 'avatar',
        Cell: ({ row }) => {
          return <Avatar className="mx-8" alt={row.original.name} src={row.original.avatar} />;
        },
        className: 'justify-center',
        width: 64,
        sortable: false,
      },
      {
        Header: 'First Name',
        accessor: 'name',
        className: 'font-medium',
        sortable: true,
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
        className: 'font-medium',
        sortable: true,
      },
      {
        Header: 'Company',
        accessor: 'company',
        sortable: true,
      },
      {
        Header: 'Job Title',
        accessor: 'jobTitle',
        sortable: true,
      },
      {
        Header: 'Email',
        accessor: 'email',
        sortable: true,
      },
      {
        Header: 'Phone',
        accessor: 'phone',
        sortable: true,
      },
      {
        id: 'action',
        width: 128,
        sortable: false,
        Cell: ({ row }) => (
          <div className="flex items-center">
            <IconButton
              onClick={(ev) => {
                ev.stopPropagation();
                // dispatch(toggleStarredContact(row.original.id));
              }}
              size="large"
            >
              {user.starred && user.starred.includes(row.original.id) ? (
                <Icon className="text-yellow-700">star</Icon>
              ) : (
                <Icon>star_border</Icon>
              )}
            </IconButton>
            <IconButton
              onClick={(ev) => {
                ev.stopPropagation();
                // dispatch(removeContact(row.original.id));
              }}
              size="large"
            >
              <Icon>delete</Icon>
            </IconButton>
          </div>
        ),
      },
    ],
    [dispatch, user.starred]
  );

  useEffect(() => {
    function getFilteredArray(entities, _searchText) {
      if (_searchText.length === 0) {
        return contacts;
      }
      return FuseUtils.filterArrayByString(contacts, _searchText);
    }

    if (contacts) {
      setFilteredData(getFilteredArray(contacts, props.searchText));
    }
  }, [contacts, searchText]);

  if (!filteredData) {
    return null;
  }

  if (filteredData.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center h-full">
        <Typography color="textSecondary" variant="h5">
          There are no contacts!
        </Typography>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
      className="flex flex-auto w-full max-h-full"
    >
      <ContactsTable
        columns={columns}
        data={filteredData}
        onRowClick={(ev, row) => {
          if (row) {
            dispatch(openCardDialog(row.original));
          }
        }}
      />
    </motion.div>
  );
}

export default ContactsList;
