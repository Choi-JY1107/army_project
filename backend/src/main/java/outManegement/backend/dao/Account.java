package outManegement.backend.dao;

import outManegement.backend.dto.enumcollect.Permission;
import outManegement.backend.dto.enumcollect.Rank;

import javax.persistence.*;

@Entity
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = "USERNAME"),
        @UniqueConstraint(columnNames = "SERVICENUMBER")
})
public class Account {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USERNAME")
    private String userName;

    private String passWord;

    @Column(name="SERVICENUMBER")
    private String serviceNumber;

    @Column(name="PHONENUMBER")
    private String phoneNumber;

    @Column(name="UNIT_ID")
    private Long unitID;

    @Enumerated(EnumType.ORDINAL)
    @Column(name="RANK")
    private Rank rank;

    @Column(name="POSITION")
    private String position;

    @Enumerated(EnumType.ORDINAL)
    @Column(name="PERMISSION")
    private Permission permission;

    public Account() {

    }

    public Account(String userName, String serviceNumber, String phoneNumber, Long unitID,
                   Rank rank, String position, Permission permission) {
        this.userName = userName;
        this.serviceNumber = serviceNumber;
        this.phoneNumber = phoneNumber;
        this.unitID = unitID;
        this.rank = rank;
        this.position = position;
        this.permission = permission;
    }

}
