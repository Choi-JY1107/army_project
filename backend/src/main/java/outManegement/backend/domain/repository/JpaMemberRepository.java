package outManegement.backend.domain.repository;

import org.springframework.stereotype.Component;
import outManegement.backend.domain.Account;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Component
public class JpaMemberRepository implements MemberRepository{
    private final EntityManager em;

    public JpaMemberRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public Long save(Account account) {
        em.persist(account);
        return account.getId();
    }

    @Override
    public Optional<Account> findById(Long id) {
        Account account = em.find(Account.class, id);
        return Optional.ofNullable(account);
    }

    @Override
    public Optional<Account> findByName(String name) {
        List<Account> result = em.createQuery("select ac from Account ac where ac.userName= :name", Account.class)
                .setParameter("name", name)
                .getResultList();
        return result.stream().findAny();
    }

    @Override
    public List<Account> findAllMember() {
        return em.createQuery("select ac from Account ac", Account.class).getResultList();
    }

    @Override
    public void clearAll() {

    }

    @Override
    public void deleteById(Long id) {

    }
}
