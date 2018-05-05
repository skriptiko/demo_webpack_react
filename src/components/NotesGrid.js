import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import Note from './Note';

import './NotesGrid.css';

export default class NotesGrid extends Component {
    render() {
        const {
            notes,
            onNoteDelete
        } = this.props;

        const masonryOptions = {
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };

        return (
            <Masonry
                className='grid'
                options={masonryOptions}
            >
                {
                    notes.map(note =>
                        <Note
                            key={note.id}
                            id={note.id}
                            color={note.color}
                            onDelete={onNoteDelete}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </Masonry>
        );
    }
}
